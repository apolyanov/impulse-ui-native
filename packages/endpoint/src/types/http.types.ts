import type { QueryParams } from "./request.types";

export type HttpMethod =
  | "GET"
  | "QUERY"
  | "HEAD"
  | "POST"
  | "PUT"
  | "DELETE"
  | "CONNECT"
  | "OPTIONS"
  | "TRACE"
  | "PATCH";

export type HttpBodyMethod = "QUERY" | "POST" | "PUT" | "DELETE" | "PATCH";

export type HttpPathParams = Readonly<Record<string, string | number>>;

export interface HttpRequestOptions {
  headers?: Readonly<Record<string, string>>;
  params?: QueryParams;
  pathParams?: HttpPathParams;
  signal?: AbortSignal;
}

export interface HttpBodyRequestOptions<
  Body = unknown,
> extends HttpRequestOptions {
  data?: Body;
}

export type HttpRequest<Body = unknown> = HttpRequestOptions & {
  url: string;
} & (
    | { method: HttpBodyMethod; data?: Body }
    | { method: Exclude<HttpMethod, HttpBodyMethod>; data?: never }
  );

export interface HttpResponse<Data = unknown> {
  data: Data;
  status: number;
  headers: Readonly<Record<string, string>>;
}
