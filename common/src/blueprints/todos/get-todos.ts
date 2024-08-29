import { TodoType } from "../../types/todos/todo";

export type ParamsType = null;
export type ResponseType = { todos: TodoType[]; };
export const Endpoint = "todos/get-todos";
export const Method = "POST";

export interface Plug {
    params: ParamsType;
    response: ResponseType;
    method: typeof Method;
    endpoint: typeof Endpoint;
}
export const isPublic = true;

export const RateLimitingConfig = {
    calls: 5,
    per: 750,
};
