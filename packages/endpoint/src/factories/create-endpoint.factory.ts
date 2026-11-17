import type { HttpClient } from "../http";
import { createMutationFactory } from "../mutation";
import { createInfiniteQueryFactory, createQueryFactory } from "../query";

export function createEndpointFactory(client: HttpClient) {
  return {
    createMutation: createMutationFactory(client),
    createQuery: createQueryFactory(client),
    createInfiniteQuery: createInfiniteQueryFactory(client),
  };
}
