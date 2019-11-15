import * as testModule from './'

describe('NotRedux', () => {
  it('exports an object that should be the context', () => {
    expect(!!testModule.NotRedux).toEqual(true)
  })
})
