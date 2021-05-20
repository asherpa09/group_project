// // Create min(node) to return list’s smallest val.

// class Node {
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class SLL {
//     constructor() {
//         this.head = null;
//     }
//     addFront(value) {
//         var newNode = new Node(value);
//         newNode.next = this.head;
//         this.head = newNode;
//         return this.head;
//     }
//     min() {
//         var min = this.head.value;
//         var runner = this.head;
//     }
//     while (runner){
//         if(min > runner.value){
//             min = runner.value;
//         }
//         runner = runner.next;
//     }
//     return min;
// }

// Create method max() to return list’s largest val.

// class Node {
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class SLL {
//     constructor() {
//         this.head = null;
//     }

//     addFront(value) {
//         var newNode = new Node(value);
//         newNode.next = this.head;
//         this.head = newNode;
//         return this.head;
//     }

//     max() {
//         var max = this.head.value;
//         var runner = this.head;

//         while (runner){
//             if(max < runner.value){
//                 max = runner.value;
//             }
//             runner = runner.next;
//         }
//         return max;
//     }
// }

// let sll = new SLL();
// sll.addFront(6);
// sll.addFront(15);
// console.log(sll.max());

// Create average() to return average val.

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        var newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }

    average(){
        var sum = 0;
        var count = 0;
        var runner = this.head;
        while(runner){
            count++;
            sum += runner.value;
            runner = runner.next;
        }
        var avg = sum/count;
        return avg;
    }
}

let sll = new SLL();
sll.addFront(4);
sll.addFront(8);
sll.addFront(11);
sll.addFront(19);

console.log(sll.average());