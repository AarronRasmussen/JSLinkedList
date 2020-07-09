class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    get size() {
        return this.size;
    }

    prepend(element) {
        this.head = Node(element, this.head);
    }

    append(element) {
        var tempNode =  Node(element)

        if(this.head == null) {
            this.head = tempNode;
        }
        else {
            var cursor = this.head
            while(cursor.next) {
                cursor = cursor.next
            }

            cursor.next = tempNode;
        }

        this.size++;
    }

    printToString() {
        var outStr = "";
        var cursor = this.head;

        while(cursor.next) {
            outStr += cursor.element + " ";
            cursor = cursor.next;
        }

        return outStr;
    }

    printToConsole() {
        var outStr = "";
        var cursor = this.head;

        while(cursor.next) {
            console.log(cursor.element);
            cursor = cursor.next;
        }
    }
}

