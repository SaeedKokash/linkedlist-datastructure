'use strict';

const Node = require('../node');

describe('Testing node class', () => {

    test('Test creating a new Node', () => {
        const val = 'Saeed';
        const node = new Node(val);
    
        // checking if it is a new instance
        expect(node).toBeInstanceOf(Node);
    
        // checking the value in the node
        expect(node.value).toEqual('Saeed');
    
        // checking the next property to be null
        expect(node.next).toBeNull();
    })
})