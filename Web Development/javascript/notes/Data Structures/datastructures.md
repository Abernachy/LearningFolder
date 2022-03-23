# Data Structures

## Patterns

### Stacks
  Consider the elements in a stack like a stack of books.  Data is works on a last in, last out format.  

  Data is pushed(.push) to the top of the stack and then popped (.pop) out.  

----------------Code snippet-------------------------------------------

```
  class Stack {
  constructor() {    //Constructor method is what runs when we run the class.
      this.items =[]  // we need a place to store our data
      this.count = 0 //position of the element, so we dont have to use .length

  }
//Add element to top of the stck
push(element){
  this.items[this.count] = element
  console.log(`${element} added to ${this.count}`)
  this.count+=1
  return this.count - 1  

  // We want to return the position, however; count is incremented by 1
  // To aleviate this, we just return this.count - 1
}

//Return and remove the top element in a stack
// We want to return undefined if the stack is empty

pop(){
  if(this.count == 0) return undefined

  // stack is array based so we want it to delete the correct element value
  // Count is incremented, if we dont decrease it by 1, we delete the next value
  // up by accident
  
  let deleteItem = this.items[this.count-1] 
  
  // Decrease the count value
  this.count -= 1
  console.log(`${deleteItem} removed`)
  return deleteItem
}

// Check top element in stack
peek() {
  console.log(`Top element is ${this.items[this.count - 1]}`)
  return this.items[this.count - 1]
}

// Check if stack is empty
isEmpty(){
  console.log(this.count == 0 ? 'Stack is empty' : 'Stack is not empty')
  return this.count ==0
}

// Check the size of the stack
size() {
  console.log(`${this.count}`)
  return this.count
}

// Print the elements in a stack
print() {
  let str =''
  for(let i =0; i<this.count;i++) {
    str +=this.items[i] + ' '
  }
  return str
}

// Clear stack
clear() {
  this.items = []
  this.count = 0
  console.log('Stack Cleared')
  return this.items
}

}
const stack = new Stack() // initializes a new stack object

stack.print()
stack.size()

stack.push('Bitches')
stack.push(100)
stack.push('Johnny')
// Johnny added to 2

console.log(stack) 
// Stack{items:['Bitches',100,'johnny],count:3}

console.log(stack.items[2])
// Johnny

stack.pop()
// Johnny removed

console.log(stack.items[2])
//Johnny  [The element still exist, but we see 'johnny as removed']

stack.push('Acid on the face')
// Acid on the face added to 2

console.log(stack.items[2])
// Acid on the face

console.log(stack)
// { items: [ 'Bitches', 100, 'Acid on the face' ], count: 3 }

// We 'removed' Johnny by decreasing the stack count by 1, and then pushed a new value to the top of the stack, overriding Johnny with 'Acid on the face'

```  


### Queue Style

  Queue style is a linear data structure which is a container of objects that are inserted and removed according to first in and first out principle.  Deletion would happen from the front, and enque would happen at the end of the list.  The list consist of Nodes that have 2 parts: 1 - the data part containing anything and 2 - 


  ---------------Code Snippit -----------------
  ```
    Class Node {   // Create our node class containing our constructor
      constructor(data){
        this.data = data
        this.next = null  // null value is created by default
      }

    }

    Class Queue {  
      constructor() {
        this.front = null  //initialize the front and rear end of the queue when an object is created
        this.rear = null
      }
    }

    isEmpty() {  // Check if the front is empty
      return (this.front === null)  && (this.rear === null)
    }

    insert(data) {
       // take the data from the user and create a new Node
       const newNode = new Node(data)
       if (this.isEmpty()) this.front = newNode  //If queue is empty, then the front is the new node
       else this.rear.next = newNode //otherwise the ear contains the new node
       this.rear = newNode //shift the rear pointer to the new node
    }

    remove() {
      if (this.isEmpty()) return; // If the queue is empty, it'll just return
      //If one element is present, we will shift the pointer to the next element
      this.front = this.front.next
      // If the front is pointing to null then that means that whatever is previously there is no deleted
      // So we shift the pointer to the rear
      if (!this.front) this.rear = null

    }

    peekFront() { 
      // If the queue is empty, then we return undef as the default value
      if(this.isEmpty()) return undefined
      return this.front.data
    }

    display(){
      // If the queue is empty, there's nothing to print
      if (this.isEmpty()) return
      let current = this.front
      while (current!= this.rear) {
        process.stdout.write(`${current.data} ----> `)
        // process.stdout.write is essentially console.log but with formatted output.  This bit can be replaced with console.log(`${current.data})
        current = current.next
      }
      process.stdout.write(`${this.rear.data} (REAR)\n`)
    }


    consts queue = new Queue()

    queue.insert(5)
    queue.insert(10)

    queue.display()
