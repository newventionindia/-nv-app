/**
 * Set default headers for every method of the Rest Client.
 */
export function DefaultHeaders(defaultHeaders: any) {
    return (target) => {
        target.prototype.getDefaultHeaders = () => {
            return defaultHeaders;
        };
        return target;
    };
}
