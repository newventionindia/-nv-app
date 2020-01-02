import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestClientUtil } from '../../../utils/rest-client.util';
import { WebFetchErrorHandler } from '../error/handler/web-fetch-error.handler';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';

/**
 * Rest service client to make network rest calls, intercepts request/response and handles client and network errors.
 */
@Injectable()
export abstract class RestClient {
    private webFetchErrorHandler: WebFetchErrorHandler = null;
    private dynamicUri: string = null;
    private dynamicBaseUrl: string = null;
    private dynamicTimeout: number = null;
    private dynamicAuthHeaders: Map<string, string> = new Map<string, string>();

    public constructor(protected http: HttpClient) {
        this.webFetchErrorHandler = new WebFetchErrorHandler();
    }

    private getServiceId(): string {
        return;
    }

    private getDefaultHeaders(): object {
        return;
    }

    private getBaseUrl(): string {
        return '';
    }

    protected setDynamicTimeout(timeout: number) {
        RestClientUtil.log(
            'RestClient : setDynamicTimeout() ===> timeout ===> %o',
            timeout
        );
        this.dynamicTimeout = timeout;
    }

    private getDynamicTimeout(): number {
        RestClientUtil.log(
            'RestClient : getDynamicTimeout() ===> this.dynamicTimeout ===> %o',
            this.dynamicTimeout
        );
        return this.dynamicTimeout;
    }

    protected setDynamicAuthHeaders(authHeaders: Map<string, string>) {
        RestClientUtil.log(
            'RestClient : setDynamicAuthHeaders() ===> authHeaders ===> %o',
            authHeaders
        );
        this.dynamicAuthHeaders = authHeaders;
    }

    private getDynamicAuthHeaders(): Map<string, string> {
        RestClientUtil.log(
            'RestClient : getDynamicAuthHeaders() ===> this.dynamicAuthHeaders ===> %o',
            this.dynamicAuthHeaders
        );
        return this.dynamicAuthHeaders;
    }

    protected setDynamicBaseUrl(baseUrl: string) {
        this.dynamicBaseUrl = baseUrl;
    }

    private getDynamicBaseUrl(): string {
        return this.dynamicBaseUrl;
    }

    protected setDynamicUri(uri) {
        RestClientUtil.log('RestClient : setDynamicUri() ===> uri ===> %o', uri);
        this.dynamicUri = uri;
    }

    private getDynamicUri(): string {
        RestClientUtil.log(
            'RestClient : getDynamicUri() ===> this.dynamicUri ===> %o',
            this.dynamicUri
        );
        return this.dynamicUri;
    }

    protected abstract requestInterceptor(
        request: HttpRequest<any>
    ): HttpRequest<any>;
    protected abstract responseInterceptor(
        response: Observable<HttpResponse<any>>
    ): Observable<HttpResponse<any>>;

    private handleRestServiceError(
        responseError: HttpResponse<any> | any
    ): Observable<any> {
        RestClientUtil.log(
            'RestClient : handleRestServiceError() ===> %o',
            responseError
        );
        return this.webFetchErrorHandler.handleWebFetchError(responseError);
    }

    // To Extract/Process API Non Observable response.
    public abstract getApiResponse(apiResponse: any): void;
}
