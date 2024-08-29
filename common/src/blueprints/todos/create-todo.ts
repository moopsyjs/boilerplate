export type ParamsType = { content: string; };
export type ResponseType = void;
export const Endpoint = "todos/create-todo";
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
