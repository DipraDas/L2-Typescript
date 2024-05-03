// Normal function
// Arrow function

function add(num1: number, num2: number = 10): number {
    return num1 + num2;
}

add(2, 3);


const addArrow = (num1: number, num2: number): number => num1 + num2;

// objject --> function --> method

const arr: number[] = [1, 3, 4];

const newArray: number[] = arr.map((elem: number): number => elem * elem);