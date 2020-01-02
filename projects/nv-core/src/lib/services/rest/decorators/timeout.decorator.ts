import { RestClient } from '../client/rest.client';

/**
 * Defines a custom timeout function.
 */
export function Timeout(timeout: number) {
    return (target: RestClient, propertyKey: string, descriptor: any) => {
        if (!descriptor.timeout) {
            descriptor.timeout = [];
        }
        descriptor.timeout.push(timeout);
        return descriptor;
    };
}
