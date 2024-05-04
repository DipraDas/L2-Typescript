{// Constraint using Key of


    type Vehicle = {
        bike: string,
        car: string,
        ship: string
    }

    type Owner1 = 'bike' | 'car' | 'ship';
    type Owner2 = keyof Vehicle;

    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key];
    }

    const user = {
        name: 'Mr.Persian',
        age: 25,
        address: 'ctg'
    }

    const result1 = getPropertyValue(user, 'name');

    const car = {
        model: 'Toyota 100',
        year: 500
    }

    const result2 = getPropertyValue(car, 'model');


}