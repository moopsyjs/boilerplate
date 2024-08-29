/* !STOP STOP STOP!
!STOP STOP STOP!
!STOP STOP STOP! This is a GENERATED file, if you want to make changes
you should make them inside the common/ folder NOT here */
export type ParamsType = { hello: string; };
export type ResponseType = { world: string; };
export const Endpoint = "hello/world";
export const Method = "POST";

export interface Plug {
  params: ParamsType;
  response: ResponseType;
  method: typeof Method;
  endpoint: typeof Endpoint;
}
export const isPublic = true;

export const RateLimitingConfig = {
  calls: 1,
  per: 1000,
};
export const paramsSchema = {"type":"object","properties":{"hello":{"type":"string"}},"required":["hello"],"$schema":"http://json-schema.org/draft-07/schema#"}