export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object
    ? T[P] extends (...args: any) => any
      ? T[P]
      : DeepPartial<T[P]>
    : T[P];
};
