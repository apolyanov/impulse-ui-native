export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object
    ? // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
      T[P] extends Function
      ? T[P]
      : DeepPartial<T[P]>
    : T[P];
};
