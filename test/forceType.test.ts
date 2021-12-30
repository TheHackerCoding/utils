import {forceType} from "../src"
describe('forceType', () => {
  it("number", () => {
    @forceType(number)
    let numbers: number[] = []
  })
})
