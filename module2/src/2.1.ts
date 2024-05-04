// ! Type Assertion 

let anything: any;

anything = "Next Level Web Development";

anything = 222;

(anything as number).toFixed;



const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === 'string') {
        const convertedValue = parseFloat(value) * 1000;
        return `The converted valur is : ${convertedValue}`;
    }
    if (typeof value === 'number') {
        return value * 1000
    }
}

const result1 = kgToGm(1000) as number;
const result2 = kgToGm('1000') as string;

type CustomError = {
    message: string;
}

try {

} catch (err) {
    console.log((err as CustomError).message)
}