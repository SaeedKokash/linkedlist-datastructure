'use strict';

const LinkedList = require('../ll');

describe('Testing the linked list', () => {

    test('Test creating a linked list', () => {
        const ll = new LinkedList();

        // these two will give the same result
        expect(ll).toBeDefined();
        expect(ll).toBeInstanceOf(LinkedList);

        // testing the head at first
        expect(ll.head).toBeNull();

    })
})

describe('Insert to the beginning of the linked list', () => {
    
    test('Add to an empty linked list', () => {
        const ll = new LinkedList();
        ll.insert('a');
        expect(ll.head.value).toEqual('a');
        expect(ll.head.next).toBeNull();

    });

    test('Add to a non-empty linked list', () => {
        const ll = new LinkedList();
        ll.insert('a');
        ll.insert('b');

        expect(ll.head.value).toEqual('b');
        expect(ll.head.next.value).toEqual('a');
    })
})

describe('Append to the end of the linked list', () => {
    test('Append to an empty linked list', () => {
        const ll = new LinkedList();
        ll.insert('a');
        expect(ll.head.value).toEqual('a');
        expect(ll.head.next).toBeNull();
    })

    test('Append to a non-empty linked list', () => {
        const ll = new LinkedList();
        ll.append('a');
        ll.append('b');
        ll.append('c');

        expect(ll.head.value).toEqual('a');
        expect(ll.head.next.value).toEqual('b');
        expect(ll.head.next.next.value).toEqual('c');
        expect(ll.head.next.next.next).toBeNull();
    })
})

describe('Delete the middle item of the linked list', () => {
    
    test('Delete an empty linked list', () => {
        const ll = new LinkedList();
        expect(ll.delete('a')).toEqual('Linked list is empty');
    })
       
    
    test('delete the middle element of the linked list', () => {
        const ll = new LinkedList();
        ll.append('a');
        ll.append('b');
        ll.append('c');
        ll.append('d');
        ll.append('e');

        // testing the linked list before deleting
        expect(ll.head.value).toEqual('a');
        expect(ll.head.next.value).toEqual('b');
        expect(ll.head.next.next.value).toEqual('c');
        expect(ll.head.next.next.next.value).toEqual('d');
        expect(ll.head.next.next.next.next.value).toEqual('e');
        expect(ll.head.next.next.next.next.next).toBeNull();

        // deleting the middle element
        ll.delete('c');

    })
})

describe('Insert before a specific value', () => {

    test('Insert before an empty linked list', () => {
        const ll = new LinkedList();
        expect(ll.insertBefore('a', 'b')).toEqual('Linked list is empty');
    })

    test('Insert before a specific value', () => {
        const ll = new LinkedList();
        ll.append('a');
        ll.append('b');
        ll.append('c');
        ll.append('d');
        ll.append('e');

        // testing the linked list before inserting
        expect(ll.head.value).toEqual('a');
        expect(ll.head.next.value).toEqual('b');
        expect(ll.head.next.next.value).toEqual('c');
        expect(ll.head.next.next.next.value).toEqual('d');
        expect(ll.head.next.next.next.next.value).toEqual('e');
        expect(ll.head.next.next.next.next.next).toBeNull();

        // inserting before a specific value
        ll.insertBefore('c', 'z');

        // testing the linked list after inserting
        expect(ll.head.value).toEqual('a');
        expect(ll.head.next.value).toEqual('b');
        expect(ll.head.next.next.value).toEqual('z');
        expect(ll.head.next.next.next.value).toEqual('c');
        expect(ll.head.next.next.next.next.value).toEqual('d');
        expect(ll.head.next.next.next.next.next.value).toEqual('e');
        expect(ll.head.next.next.next.next.next.next).toBeNull();
    })
})
