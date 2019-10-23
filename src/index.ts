export type Result<T> = [T, Error]

export default function goerr<T>(func: () => T): Result<T>
export default function goerr<T>(promise: Promise<T>): Promise<Result<T>>
export default function goerr(parameter: any): any {
  if (parameter instanceof Promise) {
    return parameter.then(r => [r, null]).catch(err => [null, err])
  }

  try {
    const result = parameter()
    return [result, null]
  } catch (err) {
    return [null, err]
  }
}
