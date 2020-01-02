import { RestClient } from '../client/rest.client';
import { DataFormatConstants } from '../../../constants/data-format.constants';

/**
 *
 * This methods defines rest request parameter formation.
 */
export function paramBuilder(paramName: string) {
    return (
        name: string,
        value?: any | { value?: any; format?: string }
    ) => {
        return (
            target: RestClient,
            propertyKey: string | symbol,
            parameterIndex: number
        ) => {
            let format;
            if (value) {
                if (typeof value === 'object') {
                    if (value.value !== undefined && value.value !== null) {
                        value = value.value;
                    }
                    if (value.format !== undefined && value.format !== null) {
                        if (DataFormatConstants[value.format] !== undefined) {
                            format = value.format;
                        } else {
                            throw new Error(
                                'Unknown Collection Format: \'' + value.format + '\''
                            );
                        }
                    }
                }
            }
            const metadataKey = '${propertyKey}_${paramName}_parameters';
            const paramObj: any = {
                key: name,
                parameterIndex,
                value,
                format
            };
            if (Array.isArray(target[metadataKey])) {
                target[metadataKey].push(paramObj);
            } else {
                target[metadataKey] = [paramObj];
            }
        };
    };
}
