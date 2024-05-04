{

    // Utility Types

    type Person = {
        name: string,
        age: number,
        // email?: string,
        contactNo: string
    }

    // Pick
    type NameAge = Pick<Person, 'name' | 'contactNo'>


    // Omit
    type ContactInfo = Omit<Person, 'name' | 'age'>

    // Required
    type PersonRequired = Required<Person>

    // Pertial
    type PersonPersial = Required<Person>

    // Readonly
    type PersonReadOnly = Required<Person>
    const person1: PersonReadOnly = {
        name: 'Dipra',
        age: 23,
        contactNo: '39736'
    }

    person1.name = 'dsfd';


    type MyObj = Record<string, number>
    const EmptyObj: Record<string, unknown> = {};

    const obj1: MyObj = {
        a: 'aa',
        b: 'bb',
        c: 'cc',
        d: 'dd',
        e: 6
    }


}