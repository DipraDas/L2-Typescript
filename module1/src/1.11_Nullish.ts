{
    const isAuthenticated = '';

    const result1 = isAuthenticated ?? 'Guest'; // if isAuthenticated is null or undefined then it will return Guest;
    const result2 = isAuthenticated ? isAuthenticated : 'Guest';


    type User = {
        name: string;
        address: {
            city: string,
            road: string,
            presentAddress: string
        }
    }

    const user: User = {
        name: 'Persian',
        address: {
            city: 'CTG',
            road: 'Awesome Road',
            presentAddress: 'Ctg Town'
        }
    }

    const permanentAddress = user?.address?.presentAddress ?? 'No Address'
}