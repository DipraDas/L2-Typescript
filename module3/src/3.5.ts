// Access Modifier

class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number

    constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }

    addDeposit(amount: number) {
        this._balance = this._balance + amount;
    }
    getBalance() {
        return this._balance
    }
}

class StudentAccount extends BankAccount {
    test() {
        this._balance
    }
}

const goribManusherAccount = new BankAccount(1111, 'Mr.Gorib', 39);

goribManusherAccount.addDeposit(35);
const myBalance = goribManusherAccount.getBalance();
console.log(myBalance);