{
    // ! Object Destructuring
    const user = {
        id: 395,
        name: {
            firstName: 'Mezba',
            midName: 'Abedin',
            lastName: 'Persian'
        },
        contactNo: '017300000',
        address: 'Uganda'
    }

    const {
        contactNo,
        name: { firstName: userFirstName } // Name Alias
    } = user;

    // ! Array Destructuring
    const myFriends = ['changelr', 'joni', 'ross', 'rachel', 'monica']
    const [, , bestfriend, ...rest] = myFriends;


}
