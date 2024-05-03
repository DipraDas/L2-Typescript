{

    type Student = {
        name: string,
        age: number,
        contactNo?: string,
        gender: string,
        address: string
    };

    const student1: Student = {
        name: 'Dip',
        age: 26,
        contactNo: '01876704498',
        gender: 'Male',
        address: 'Nasirabad'
    }

    type UserName = string;
    type IsAdmin = boolean;

    const userName: UserName = 'Dipra';
    const isAdmin: IsAdmin = true;

    type Add = (num1: number, num2: number) => number;
    const add: Add = (num1, num2) => num1 + num2;

}