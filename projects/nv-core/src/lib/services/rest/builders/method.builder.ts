import {
    HttpRequest,
    HttpParams,
    HttpHeaders,
    HttpResponse
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError, timeout } from 'rxjs/operators';
import { RestClient } from '../client/rest.client';
import { RestServiceConstants } from '../../../constants/rest-service.constants';
import { RestClientUtil } from '../../../utils/rest-client.util';

/**
 * This class defines method builder and wrap actual HTTP call with Error Handler.
 */
export function methodBuilder(method: string) {
    return (uri?: string) => {
        return (target: RestClient, propertyKey: string, descriptor: any) => {
            const pPath = target[`${propertyKey}_Path_parameters`];
            const pQuery = target[`${propertyKey}_Query_parameters`];
            const pBody = target[`${propertyKey}_RequestBody_parameters`];
            const pHeader = target[`${propertyKey}_Header_parameters`];

            descriptor.value = function(...args: any[]) {
                // Path
                let restUri: string = uri;

                if (
                    restUri === null ||
                    typeof restUri === 'undefined' ||
                    restUri.trim() === ''
                ) {
                    RestClientUtil.log(
                        'methodBuilder() : restUri blank ===>  %o ',
                        restUri
                    );
                    restUri = this.getDynamicUri();
                }

                if (pPath) {
                    for (const k in pPath) {
                        if (pPath.hasOwnProperty(k)) {
                            restUri = restUri.replace(
                                '{' + pPath[k].key + '}',
                                args[pPath[k].parameterIndex]
                            );
                        }
                    }
                }

                // Query
                let search: HttpParams = new HttpParams();
                if (pQuery) {
                    pQuery
                        .filter(
                            (p: any) =>
                                args[p.parameterIndex] !== undefined || p.value !== undefined
                        ) // filter out optional parameters
                        .forEach((p: any) => {
                            const key = p.key;
                            let value: any = args[p.parameterIndex];

                            // if the value is not Object, we assign it directly
                            if (value === undefined && p.value !== undefined) {
                                value = p.value;
                            }

                            // if the value is a instance of Object, we stringify it
                            if (value instanceof Object) {
                                value = JSON.stringify(value);
                            }

                            // if the value is Array of Query parameter , we map it
                            if (Array.isArray(value)) {
                                value.forEach((v) => (search = search.append(key, v)));
                            } else {
                                search = search.set(key, value);
                            }
                        });
                }

                // Headers
                // set class default headers
                let headers = new HttpHeaders(this.getDefaultHeaders());

                let modifiedRequestHeader = '';

                // set method specific headers
                for (const k in descriptor.headers) {
                    if (descriptor.headers.hasOwnProperty(k)) {
                        // check if header contains BusinessTransaction, then appen consumer name.
                        modifiedRequestHeader = descriptor.headers[k];

                        if (
                            k.toLowerCase() ===
                            RestServiceConstants.IS_AUTH_HEADERS_ACCEPT.toLowerCase()
                        ) {
                            const dynamicAuthHeaders: Map<
                                string,
                                string
                            > = this.getDynamicAuthHeaders();
                            dynamicAuthHeaders.forEach((value: string, key: string) => {
                                headers = headers.append(key, value);
                            });
                        } else {
                            headers = headers.append(k, modifiedRequestHeader);
                        }
                    }
                }

                modifiedRequestHeader = '';

                // set parameter specific headers
                if (pHeader) {
                    for (const k in pHeader) {
                        if (pHeader.hasOwnProperty(k)) {
                            headers = headers.append(
                                pHeader[k].key,
                                args[pHeader[k].parameterIndex]
                            );
                        }
                    }
                }

                // RequestBody
                const urlencoded = headers.get(RestServiceConstants.CONTENT_TYPE);
                let body = null;
                if (pBody) {
                    if (
                        urlencoded &&
                        urlencoded === RestServiceConstants.APPLICATION_FORM_URL_ENCODED
                    ) {
                        body = args[pBody[0].parameterIndex];
                    } else {
                        body = JSON.stringify(args[pBody[0].parameterIndex]);
                    }
                }

                let baseUrl: string;
                /**
                 * If somebody have called setDynamicBaseUrl(<value>), with a non null or non undefined value,
                 * it will consider that value as a baseUrl.
                 * Else it will consider the value defined in webApiUrl(application.json) as a baseUrl.
                 */
                if (
                    typeof this.getDynamicBaseUrl() !== 'undefined' &&
                    this.getDynamicBaseUrl() !== null &&
                    this.getDynamicBaseUrl().trim() !== ''
                ) {
                    baseUrl = this.getDynamicBaseUrl();
                    RestClientUtil.log(
                        'methodBuilder() : getDynamicBaseUrl %o ',
                        baseUrl
                    );
                } else {
                    baseUrl = this.getBaseUrl();
                    RestClientUtil.log('methodBuilder() : getBaseUrl %o ', baseUrl);
                }

                const reqOptions: any = {
                    headers,
                    params: search
                };

                const httRequest = new HttpRequest(
                    method,
                    baseUrl + restUri,
                    JSON.parse(body),
                    reqOptions
                );

                // intercept the request
                this.requestInterceptor(httRequest);

                const completeUrl: string = baseUrl + restUri;
                // make the request and store the observable for later transformation(success/error)

                let observable: Observable<HttpResponse<any>> = this.http
                    .request(httRequest)
                    .pipe(
                        catchError((responseError: any) => {
                            RestClientUtil.log(
                                'methodBuilder() : ===> Caught Http Error and sending to RestClient : handleRestServiceError() %o',
                                responseError
                            );
                            return this.handleRestServiceError(responseError);
                        })
                    );

                this.setDynamicBaseUrl(null); // Setting the dynamicBaseUrl null, so that for next Rest API call,
                // it will pick default webApiUrl, if not called setDynamicBaseUrl.

                // global response interceptor
                observable = this.responseInterceptor(observable);

                if (descriptor.timeout) {
                    descriptor.timeout.forEach((timeoutNumber: number) => {
                        const staticTimeout: number = timeoutNumber;
                        RestClientUtil.log(
                            'RestClient : Setting Static Timeout ===> %o',
                            staticTimeout
                        );
                        observable = observable.pipe(timeout(staticTimeout));
                    });
                } else if (
                    typeof this.getDynamicTimeout() !== 'undefined' &&
                    this.getDynamicTimeout() !== null &&
                    // Number(this.getDynamicTimeout()) !== NaN &&
                    Object.is(Number(this.getDynamicTimeout()), NaN)
                ) {
                    const dynamicTimeout = Number(this.getDynamicTimeout());
                    RestClientUtil.log(
                        'RestClient : Setting Dynamic Timeout ===> %o',
                        dynamicTimeout
                    );
                    observable = observable.pipe(timeout(dynamicTimeout));
                }

                // transform the obserable in accordance to the @Produces decorator
                if (descriptor.producer) {
                    observable = observable.pipe(map(descriptor.producer));
                }

                return observable;
            };

            return descriptor;
        };
    };
}
