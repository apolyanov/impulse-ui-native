import type {
  HttpBodyRequestOptions,
  HttpRequest,
  HttpRequestOptions,
  HttpResponse,
} from "../types/http.types";

/** Transport implementations own serialization, decoding, errors, and cancellation. */
export abstract class HttpClient {
  protected abstract send<Data = unknown, Body = unknown>(
    request: HttpRequest<Body>,
  ): Promise<HttpResponse<Data>>;

  async request<Data = unknown, Body = unknown>(
    request: HttpRequest<Body>,
  ): Promise<HttpResponse<Data>> {
    const { pathParams, ...transportRequest } = request;
    const url = request.url.replace(
      /:([A-Za-z_][A-Za-z0-9_]*)/g,
      (_, key: string): string => {
        const value = pathParams?.[key];

        if (value === undefined) {
          throw new Error(`Missing path parameter: ${key}`);
        }

        return encodeURIComponent(String(value));
      },
    );

    return this.send<Data, Body>({ ...transportRequest, url });
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
