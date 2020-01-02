/**
 * Set the base URL of rest service.
 */
export function BaseUrl(url: string) {
    return (target) => {
        target.prototype.getBaseUrl = () => {
            return url;
        };
        return target;
    };
}
