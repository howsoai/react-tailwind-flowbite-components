// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type OmitFirst<T extends any[]> = T extends [infer A, ...infer R]
  ? R
  : never;
