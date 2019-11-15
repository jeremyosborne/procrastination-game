import * as testMod from './'

describe('AppState', () => {
  describe('action creators', () => {
    describe('actionClick', () => {
      it('creates a flux standard action', () => {
        const action = testMod.actionClick()
        expect(action.type).toEqual('events/click')
        expect(!!action.payload).toEqual(true)
      })
    })
  })
})
