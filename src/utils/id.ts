let count = 0

export function newId(prefix: string = 'id-'): string {
  return `${prefix}${++count}`
}
