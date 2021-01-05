export type Result<T> = [Error, T]

export default function goerr<T>(func: () => T): Result<T>
export default function goerr<T>(promise: PromiseLike<T>): Promise<Result<T>>
export default function goerr<T>(
  asyncFunc: () => Promise<T>
): Promise<Result<T>>

export default function goerr(parameter: any): any {
  if ('then' in parameter && 'catch' in parameter) {
    return parameter
      .then((r: any) => [null, r])
      .catch((err: Error) => [err, null])
  }

  try {
    const result = parameter()
    return result instanceof Promise ? goerr(result) : [null, result]
  } catch (err) {
    return [err, null]
  }
}
