// // 1

const costumer = {
	name: 'jennifer',
	city: 'Holon',
	isMember: true
};

function checkMembership() {
	if (costumer.isMember === true) {
		console.log(`hello ${costumer.name}, we're glad that you joined our membership`);
	} else {
		console.log(`sorry ${costumer.name}, you're not a member please sign up`);
	}
}
//You should have built the function as part of the object. (see Ben's solution)
checkMembership();

// 2

class Member {
	constructor(name, city, isMember) {
		(this.name = name), (this.city = city), (this.isMember = isMember);
	}
	checkMember() {
		if (this.isMember === true) {
			console.log(`hello ${this.name}, we're glad that you joined our membership`);
		} else {
			console.log(`sorry ${this.name}, you're not a member please sign up`);
		}
	}
}

//here you done it well!

let memberOne = new Member('jennifer', 'holon', true);
let memberTwo = new Member('netninja', 'uk', false);
memberOne.checkMember();
memberTwo.checkMember();
