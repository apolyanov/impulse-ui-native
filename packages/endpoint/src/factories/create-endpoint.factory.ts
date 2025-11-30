import type { Axios } from "axios";
import { createMutationFactory } from "../mutation";
import { createQueryFactory } from "../query";

export function createEndpointFactory(client: Axios) {
  return {
    createMutation: createMutationFactory(client),
    createQuery: createQueryFactory(client),
  };
}
