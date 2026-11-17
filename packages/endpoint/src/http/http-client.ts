import type {
  HttpBodyRequestOptions,
  HttpPathParams,
  HttpRequest,
  HttpRequestOptions,
  HttpResponse,
} from "../types/http.types";
import type { QueryParams } from "../types/request.types";

/** Transports own body encoding, response decoding, errors, and cancellation. */
export abstract class HttpClient {
  protected abstract send<Data = unknown, Body = unknown>(
    request: HttpRequest<Body>,
  ): Promise<HttpResponse<Data>>;

  async request<Data = unknown, Body = unknown>(
    request: HttpRequest<Body>,
  ): Promise<HttpResponse<Data>> {
    const { pathParams, params, ...transportRequest } = request;
    const path = this.pathParams(request.url, pathParams ?? {});
    const url = this.params(path, params ?? {});

    return this.send<Data, Body>({ ...transportRequest, url });
  }

  protected params(path: string, params: QueryParams): string {
    const searchParams = new URLSearchParams();

    for (const key in params) {
      const value = params[key];

      if (value === null || value === undefined) {
        continue;
      }

      if (Array.isArray(value) && value.length > 0) {
        searchParams.set(key, value.map(String).join(","));
      } else {
        searchParams.set(key, String(value));
      }
    }

    const query = searchParams.toString();

    if (!query) {
      return path;
    }

    return `${path}?${query}`;
  }

  protected pathParams(path: string, params: HttpPathParams): string {
    return path.replace(
      /:([A-Za-z_][A-Za-z0-9_]*)/g,
      (_, key: string): string => {
        const value = params[key];

        if (value === undefined) {
          throw new Error(`Missing path parameter: ${key}`);
        }

        return encodeURIComponent(String(value));
      },
    );
  }

  get<Data = unknown>(url: string, options?: HttpRequestOptions) {
    return this.request<Data>({ ...options, method: "GET", url });
  }

  query<Data = unknown, Body = unknown>(
    url: string,
    options?: HttpBodyRequestOptions<Body>,
  ) {
    return this.request<Data, Body>({ ...options, method: "QUERY", url });
  }

  head(url: string, options?: HttpRequestOptions) {
    return this.request<void>({ ...options, method: "HEAD", url });
  }

  post<Data = unknown, Body = unknown>(
    url: string,
    options?: HttpBodyRequestOptions<Body>,
  ) {
    return this.request<Data, Body>({ ...options, method: "POST", url });
  }

  put<Data = unknown, Body = unknown>(
    url: string,
    options?: HttpBodyRequestOptions<Body>,
  ) {
    return this.request<Data, Body>({ ...options, method: "PUT", url });
  }

  delete<Data = unknown, Body = unknown>(
    url: string,
    options?: HttpBodyRequestOptions<Body>,
  ) {
    return this.request<Data, Body>({ ...options, method: "DELETE", url });
  }

  connect(url: string, options?: HttpRequestOptions) {
    return this.request<void>({ ...options, method: "CONNECT", url });
  }

  options<Data = unknown>(url: string, options?: HttpRequestOptions) {
    return this.request<Data>({ ...options, method: "OPTIONS", url });
  }

  trace<Data = unknown>(url: string, options?: HttpRequestOptions) {
    return this.request<Data>({ ...options, method: "TRACE", url });
  }

  patch<Data = unknown, Body = unknown>(
    url: string,
    options?: HttpBodyRequestOptions<Body>,
  ) {
    return this.request<Data, Body>({ ...options, method: "PATCH", url });
  }
}
