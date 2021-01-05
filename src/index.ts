export type Result<T> = [Error, T]

export default function goerr<T>(func: () => Promise<T>): Promise<Result<T>>
export default function goerr<T>(promise: Promise<T>): Promise<Result<T>>
export default function goerr(parameter: any): any {
  if (parameter instanceof Promise) {
    return parameter.then(r => [r, null]).catch(err => [null, err])
  }

  try {
    const result = parameter()
    return [null, result]
  } catch (err) {
    return [err, null]
  }
}
