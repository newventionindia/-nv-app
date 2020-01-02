/*
 * Public API Surface of nv-core
 */

export { RestClient } from './lib/services/rest/client/rest.client';
export { BaseUrl } from './lib/services/rest/decorators/base-url.decorator';
export {
    DefaultHeaders
} from './lib/services/rest/decorators/default-headers.decorator';
export { Headers } from './lib/services/rest/decorators/headers.decorator';
export {
    ResponseBody
} from './lib/services/rest/decorators/response-body.decorator';
export { Timeout } from './lib/services/rest/decorators/timeout.decorator';
export {
    Path,
    Query,
    RequestBody,
    PlainBody,
    Header
} from './lib/services/rest/request/params';
export { GET, POST, PUT, DELETE, HEAD } from './lib/services/rest/request/methods';
export { Mapper } from './lib/services/rest/response/mapper';
export { RestServiceConstants } from './lib/constants/rest-service.constants';

export * from './lib/nv-core.module';
