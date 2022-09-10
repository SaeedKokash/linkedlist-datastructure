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