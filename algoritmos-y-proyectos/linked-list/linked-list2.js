class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

// const n = new Node(7, null);
// console.log({ n });

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertHead(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    insertTail(data) {
        let node = new Node(data);
        let current;

        if (!this.head) {
            this.insertHead(data);
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }
        this.size++;
    }

    getAt(index) {
        let current = this.head;
        let count = 0;
        let val;

        while (current) {
            if (count === index) val = current;
            count++;
            current = current.next;
        }

        return val;
    }

    getValueAt(index) {
        return this.listData[index];
    }

    removeAt(index) {
        if (index > this.size - 1 || index < 0)
            throw new Error(`Invalid index: ${index}`);

        let current = this.head;
        let previous;
        let count = 0;

        if (index === 0) this.head = current.next;
        else {
            while (count < index) {
                count++;
                previous = current;
                current = current.next;
                console.log({ previous, current, count });
            }

            previous.next = current.next;
        }
        this.size--;
    }

    get listData() {
        let current = this.head;
        const data = [];
        while (current) {
            data.push(current.data);
            current = current.next;
        }
        return data;
    }
}

const ll = new LinkedList();
ll.insertHead(2);
ll.insertHead(1);
ll.insertTail(3);
ll.removeAt(4);

const list = ll.listData;

const index2 = ll.getAt(2);
const valAtIndex1 = ll.getValueAt(1);
const size = ll.size;
console.log({ ll, list, index2, valAtIndex1, size });
