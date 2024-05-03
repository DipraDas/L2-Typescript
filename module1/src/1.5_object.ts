const user: {
    readonly company: string // type --> literal types
    firstName: string;
    middleName?: string; // optional type
    lastName: string;
    isMarried: boolean;
} = {
    company: 'Programming Hero',
    firstName: 'Dipra',
    lastName: 'Das',
    isMarried: false
}

console.log('User Name : ', user.firstName);