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
}

module.exports = LinkedList;