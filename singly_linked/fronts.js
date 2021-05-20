// Add Front
// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.
// class Node {
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class SLL {
//     constructor(head = null) {
//         this.head = head;
//     }

//     addFront(value){
//         var newNode = new Node(value);

//         newNode.next = this.head;

//         this.head = newNode;

//         return this.head;
//     }
// }

// let sll = new SLL();
// sll.addFront(2);
// console.log(sll);

// Write a method to remove the head node and return the new list head node. If the list is empty, return null.
// class Node {
//     constructor(value){
//         this.value = value;
//         this.next= null;
//     }
// }

// class SLL {
//     constructor(head=null) {
//         this.head = head;
//     }
//     addFront(value){

//         var newNode = new Node(value);

//         newNode.next = this.head;

//         this.head = newNode;

//         return this.head;
//     }

//     removeFront(){
//         if(this.head){
//             this.head = this.head.next;
//         }
//         return this.head;
//     }
// }

// let sll = new SLL();
// sll.addFront(5);
// sll.addFront(4);
// sll.removeFront();
// console.log(sll);


// Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SLL {
    constructor(head = null) {
        this.head = head;
    }

    addFront(value){
        var newNode = new Node(value);

        newNode.next = this.head;

        this.head = newNode;

        return this.head;
    }
    removeFront(){
        if(this.head){
            this.head = this.head.next;
        }
        return this.head;
    }

    front() {
        if(this.head) {
            return this.head.value;
        }
        return null;
    }

    contains(value) {
        var temp = this.head;
        while(temp) {
            if (temp.value == value) {
                return true;
            }
            temp = temp.next;
        }
        return false
    }
}

let sll = new SLL();
sll.addFront(5);
sll.addFront(15);
sll.addFront(25);
sll.addFront(35);
console.log(sll.contains(9));
console.log(sll.contains(15));