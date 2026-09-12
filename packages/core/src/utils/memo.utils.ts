import type { ComponentType } from "react";
import { memo as reactMemo } from "react";

export function memo<T extends ComponentType<any>>(component: T): T {
  return reactMemo(component) as unknown as T;
}
