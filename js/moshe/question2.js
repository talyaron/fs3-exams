const Customer = {
    name: 'Moshe',
    address: 'Holon, Israel',
    clubMember: false,

    check: function greet(member) {
        if ( member == true ){
            console.log('Welcome to the club')
        } else {
            console.log('Plase join our club, we have cookies!')
        }
    },

}

Customer.check();

