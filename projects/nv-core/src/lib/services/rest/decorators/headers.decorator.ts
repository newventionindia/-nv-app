import { RestClient } from '../client/rest.client';

/**
 * Set custom headers for a Rest method.
 */
export function Headers(customHeaders: any) {
    return (target: RestClient, propertyKey: string, descriptor: any) => {
        descriptor.headers = customHeaders;
        return descriptor;
    };
}
