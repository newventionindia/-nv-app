import { WebFetchErrorHandler } from './web-fetch-error.handler';
import { Observable } from 'rxjs';

describe('WebFetchErrorHandler', () => {
    let webFetchErrorHandler: WebFetchErrorHandler;

    beforeEach(() => {
        webFetchErrorHandler = new WebFetchErrorHandler();
    });

    it('should be able to create WebFetchErrorHandler instance', () => {
        expect(webFetchErrorHandler).toBeDefined();
    });

    it('should have a function named handleWebFetchError', () => {
        expect(typeof webFetchErrorHandler.handleWebFetchError).toBe('function');
    });

    it('should be able return Server Error Message in case of Unknown Error/null error response', async () => {
        const error: Observable<
            any
        > = await webFetchErrorHandler.handleWebFetchError(null);
        error.subscribe(
            () => {},
            (errorData) => {
                expect(errorData).toEqual('Unknown Server Error');
            }
        );
    });
});
