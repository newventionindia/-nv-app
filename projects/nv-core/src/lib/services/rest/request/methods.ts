import { methodBuilder } from '../builders/method.builder';
import { RestClient } from '../client/rest.client';

export const GET = methodBuilder('GET');
export const POST = methodBuilder('POST');
export const PUT = methodBuilder('PUT');
export const DELETE = methodBuilder('DELETE');
export const HEAD = methodBuilder('HEAD');
