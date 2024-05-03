{
    // Normal function
    // Arrow function

    function add(num1: number, num2: number = 10): number {
        return num1 + num2;
    }

    add(2, 3);


    const addArrow = (num1: number, num2: number): number => num1 + num2;

    const poorUser = {
        name: 'Dipra',
        balance: 0,
        addBalance(balance: number): string {
            return `My new balance is : ${this.balance + balance}`;
        }
    }

    // objject --> function --> method

    const arr: number[] = [1, 3, 4];

    const newArray: number[] = arr.map((elem: number): number => elem * elem);
}