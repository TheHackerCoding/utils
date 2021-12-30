const randomNumber = (mn: number, mx: number): number => Math.random() * (mx - mn) + mn;

const randomSelector = <T>(data: T[]): T => data[Math.floor(randomNumber(1, data.length))]

const clone = <T>(obj: T): T => Object.assign({}, obj);

type types = string | number

const forceType = (value: types) => {
  return (target: unknown[]) => {
    target = new Proxy(target, {
      set(target, p, val) {
        if (typeof val == value) {
          target[p as any] = val
          return true
        } else {
          return false
        }
      }
    })
  }
}

// uhh finish dis up
//const repeat = ()

export {
  randomSelector,
  randomNumber,
  clone,
  forceType
}
