import { paramBuilder } from '../builders/param.builder';
import { RestClient } from '../client/rest.client';

export const PATH = 'Path';
export const QUERY = 'Query';
export const REQUEST_BODY = 'RequestBody';
export const PLAIN_BODY = 'PlainBody';
export const HEADER = 'Header';
export const Path = paramBuilder(PATH);
export const Query = paramBuilder(QUERY);
export const RequestBody = paramBuilder(REQUEST_BODY)(REQUEST_BODY);
export const PlainBody = paramBuilder(PLAIN_BODY)(PLAIN_BODY);
export const Header = paramBuilder(HEADER);
