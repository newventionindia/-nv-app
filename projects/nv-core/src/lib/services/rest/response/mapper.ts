import { RestClient } from '../client/rest.client';

/**
 *
 * @author Vivek Krishna Varma
 */
export function Mapper(mapper: (resp: any) => any) {
    return (target: RestClient, propertyKey: string, descriptor: any) => {
        if (!descriptor.mappers) {
            descriptor.mappers = [];
        }
        descriptor.mappers.push(mapper);
        return descriptor;
    };
}
