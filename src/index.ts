export type Result<T, E extends Error> = [T | null, E | null];

export function goerr<T, E extends Error>(func: () => T): Result<T, E>;
export function goerr<T, E extends Error>(promise: PromiseLike<T>): Promise<Result<T, E>>;
export function goerr<T, E extends Error>(asyncFunc: () => Promise<T>): Promise<Result<T, E>>;

export function goerr(parameter: any): any {
  if ("then" in parameter && "catch" in parameter) {
    return parameter.then((r: any) => [r, null]).catch((err: Error) => [null, err]);
  }

  try {
    const result = parameter();
    return result instanceof Promise ? goerr(result) : [result, null];
  } catch (err) {
    return [null, err];
  }
}
