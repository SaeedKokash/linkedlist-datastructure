'use strict';

const Node = require('./node')

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(val) {
        const node = new Node(val);
        if(!this.head) { // this means that linked list is empty
            this.head = node;
        } else { // this means that linked list is not empty
            node.next = this.head;
            this.head = node;
        }
    }

    append(val) {
        const node = new Node(val);
        if(!this.head) { // this means that linked list is empty
            this.head = node;
        } else { // this means that linked list is not empty
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next
            }
            currentNode.next = node;
            
        }
    }

    // delete a node from the linked list
    delete(val) {
        if(!this.head) { // this means that linked list is empty
            return 'Linked list is empty';
        } else { // this means that linked list is not empty
            let currentNode = this.head;
            let previousNode = this.head;
            while (currentNode.value !== val) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
    }

    // insert a node in a specific position
    insertBefore(val, newVal) {
        const node = new Node(newVal);
        if(!this.head) { // this means that linked list is empty
            return 'Linked list is empty';
        } else { // this means that linked list is not empty
            let currentNode = this.head;
            let previousNode = this.head;
            while (currentNode.value !== val) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = node;
            node.next = currentNode;
        }
    }

}

module.exports = LinkedList;