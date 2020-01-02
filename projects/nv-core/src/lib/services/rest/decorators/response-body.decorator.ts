import { RestClient } from '../client/rest.client';
import { HttpResponse } from '@angular/common/http';

/**
 * Defines the type(s) that the rest service response can produce.
 */
export function ResponseBody<T>(
    interceptor?: (res: HttpResponse<any>) => void
) {
    return (target: RestClient, propertyKey: string, descriptor: any) => {
        descriptor.producer = (res: HttpResponse<any>) => {
            target.getApiResponse(res.body);
            if (interceptor) {
                interceptor(res);
            }
            return res.body as T;
        };
        return descriptor;
    };
}

/**
 * Defines the type(s) that the rest service response can produce.
 */
export function ResponsePlainBody<T>(
    interceptor?: (res: HttpResponse<any>) => void
) {
    return (target: RestClient, propertyKey: string, descriptor: any) => {
        descriptor.producer = (res: HttpResponse<any>) => {
            if (interceptor) {
                interceptor(res);
            }
            return res.body as string;
        };
        return descriptor;
    };
}
