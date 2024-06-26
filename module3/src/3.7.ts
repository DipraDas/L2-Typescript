// class Counter {
//     count: number = 0;
//     increment() {
//         return (this.count = this.count + 1)
//     }
//     decrement() {
//         return (this.count = this.count - 1)
//     }
// }

class Counter {
    static count: number = 0;
    static increment() {
        return (Counter.count = Counter.count + 1)
    }
    static decrement() {
        return (Counter.count = Counter.count - 1)
    }
}

// const instance1 = new Counter();
// console.log(instance1.increment());

// const instance2 = new Counter();
// console.log(instance1.increment());


console.log(Counter.increment());