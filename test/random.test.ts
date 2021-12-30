import { randomSelector, randomNumber } from "../src"

const isNumber = (x: any) => typeof x === 'number'

describe('random', () => {
  it("number", () => {
    expect(isNumber(randomNumber(1, 100))).toBe(true)
  })
  it("string", () => {
    let data = ["hello world", "peace", "github", "git", "stackoverflow"]
    expect(data).toContain(randomSelector(data))
  })
})

