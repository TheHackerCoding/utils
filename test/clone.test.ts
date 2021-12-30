import { clone } from '../src';

describe('clone object', () => {
  it('1 layer', () => {
    let data = {
      hello: "world"
    }
    expect(clone(data)).toEqual(data)
  })
  it('2 layers', () => {
    let data = {
      hello: {
        to: {
          my: "wonderful test"
        }
      }
    }
    expect(clone(data)).toEqual(data)
  })
})
