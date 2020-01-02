import { Observable, throwError } from 'rxjs';
import { RestClientUtil } from '../../../../utils/rest-client.util';
import { HttpResponse } from '@angular/common/http';

/**
 * Handle http status code other than 200
 * 400 : 'badRequest'
 * , 401 : 'unauthorized'
 *  , 403 : 'forbidden'
 * , 404 : 'notFound'
 * , 405 : 'methodNotAllowed'
 * , 406 : 'notAcceptable'
 * , 407 : 'proxyAuthRequired'
 * , 408 : 'clientTimeout'
 * , 409 : 'conflict'
 * , 410 : 'resourceGone'
 * , 411 : 'lengthRequired'
 * , 412 : 'preconditionsFailed'
 * , 413 : 'entityTooLarge'
 * , 414 : 'uriTooLong'
 * , 415 : 'unsupportedMediaType'
 * , 416 : 'rangeNotSatisfiable'
 * , 417 : 'expectationFailed'
 * , 422 : 'badData'
 * , 429 : 'tooManyRequests'
 * , 500 : 'internal'
 * , 501 : 'notImplemented'
 * , 502 : 'badGateway'
 * , 503 : 'serverTimeout'
 * , 504 : 'gatewayTimeout'
 */
export class WebFetchErrorHandler {
    public handleWebFetchError(
        responseError: HttpResponse<any> | any
    ): Observable<HttpResponse<any>> {
        RestClientUtil.log(
            'WebFetchErrorHandler : handleWebFetchError() ===> %o',
            responseError
        );
        return throwError(responseError || 'Unknown Server Error');
    }
}
