export class Node<T> {
  value: T
  next?: Node<T>
  constructor(value: T) {
    this.value = value
  }
}

export class List<T> {
  head?: Node<T>
  length: number = 0

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
  pop(): T | undefined {
    if (this.head) {
        const value = this.head.value
        this.head = this.head.next
        this.length -= 1
        return value
    }
  }
}
