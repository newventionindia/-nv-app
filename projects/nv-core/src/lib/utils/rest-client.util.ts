export class RestClientUtil {
    /**
     * Function log is a replacement for console.log
     */
    public static log(...args): void {
        // tslint:disable-next-line
        console.log.apply(console, args);
    }

    /**
     * Function info is a replacement for console.info
     */
    public static info(...args): void {
        // tslint:disable-next-line
        console.info.apply(console, args);
    }

    /**
     * Function warn is a replacement for console.warn
     */
    public static warn(...args): void {
        // tslint:disable-next-line
        console.warn.apply(console, args);
    }

    /**
     * Function error is a replacement for console.error
     */
    public static error(...args): void {
        // tslint:disable-next-line
        console.error.apply(console, args);
    }
}
