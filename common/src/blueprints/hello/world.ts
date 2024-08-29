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
