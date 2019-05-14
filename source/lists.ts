export class Node<T> {
  value: T
  next?: Node<T>
  constructor(value: T) {
    this.value = value
  }
}

export class List<T> {
  private head?: Node<T>
  private length: number = 0

  push(value: T) {
    const node = new Node(value)
    this.length += 1

    if (this.head) {
      let current = this.head
      while (current.next) current = current.next
      current.next = node
    } else {
      this.head = node
    }
  }

  private find(test: (n: Node<T>, i: number)=>boolean) : Node<T>? {
    let current = this.head
    if (current !== undefined) {
      let i = 0
      while (test(current, i)) current = current.next
      return current
    }
    
  }

  pop(): T | undefined {
    if (this.head) {
        const value = this.head.value
        this.head = this.head.next
        this.length -= 1
        return value
    }
  }
}
