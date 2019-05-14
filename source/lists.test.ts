import { List } from './lists'

describe('Linked List', () => {
  it('Should add items', () => {
    const list = new List()
    list.push(1)
    list.push(2)
    list.push(3)

    expect(list.length).toEqual(3)
  })

  it('Should pop items', () => {
    const list = new List()
    list.push(1)
    list.push(2)
    list.push(3)

    expect(list.pop()).toEqual(1)
    expect(list.length).toEqual(2)
    
    expect(list.pop()).toEqual(2)
    expect(list.length).toEqual(1)

    expect(list.pop()).toEqual(3)
    expect(list.length).toEqual(0)
  })

  it("", () => {
    const list = new List()
    
  })
})