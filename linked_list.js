class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.headNode = null;
    }

    // Append a node to the end of the list
    append(value) {
        const newNode = new Node(value);
        if (!this.headNode) {
            this.headNode = newNode;
            return;
        }

        let current = this.headNode;
        while (current.nextNode) {
            current = current.nextNode;
        }
        current.nextNode = newNode;
    }

    // Prepend a node to the start of the list
    prepend(value) {
        const newNode = new Node(value, this.headNode);
        this.headNode = newNode;
    }

    // Return the size of the list
    size() {
        let count = 0;
        let current = this.headNode;
        while (current) {
            count++;
            current = current.nextNode;
        }
        return count;
    }

    // Return the head (first node) of the list
    head() {
        return this.headNode;
    }

    // Return the tail (last node) of the list
    tail() {
        if (!this.headNode) return null;

        let current = this.headNode;
        while (current.nextNode) {
            current = current.nextNode;
        }
        return current;
    }

    // Return the node at a specific index
    at(index) {
        let current = this.headNode;
        let count = 0;

        while (current && count < index) {
            current = current.nextNode;
            count++;
        }
        return current ? current : null;
    }

    // Remove the last node from the list (pop)
    pop() {
        if (!this.headNode) return null;

        if (!this.headNode.nextNode) {
            const poppedNode = this.headNode;
            this.headNode = null;
            return poppedNode;
        }

        let current = this.headNode;
        while (current.nextNode && current.nextNode.nextNode) {
            current = current.nextNode;
        }
        const poppedNode = current.nextNode;
        current.nextNode = null;
        return poppedNode;
    }

    // Check if the list contains a specific value
    contains(value) {
        let current = this.headNode;
        while (current) {
            if (current.value === value) {
                return true;
            }
            current = current.nextNode;
        }
        return false;
    }

    // Find the index of a node containing a specific value
    find(value) {
        let current = this.headNode;
        let index = 0;
        while (current) {
            if (current.value === value) {
                return index;
            }
            current = current.nextNode;
            index++;
        }
        return null;
    }

    // Convert the list into a string representation
    toString() {
        let current = this.headNode;
        let str = '';
        while (current) {
            str += `( ${current.value} ) -> `;
            current = current.nextNode;
        }
        str += 'null';
        return str;
    }

    // Insert a node at a specific index
    insertAt(value, index) {
        if (index === 0) {
            this.prepend(value);
            return;
        }

        const prevNode = this.at(index - 1);
        if (!prevNode) return; // Index out of bounds

        const newNode = new Node(value, prevNode.nextNode);
        prevNode.nextNode = newNode;
    }

    // Remove a node at a specific index
    removeAt(index) {
        if (index === 0) {
            this.headNode = this.headNode.nextNode;
            return;
        }

        const prevNode = this.at(index - 1);
        if (!prevNode || !prevNode.nextNode) return;

        prevNode.nextNode = prevNode.nextNode.nextNode;
    }
}


const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());