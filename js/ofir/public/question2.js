class Customer {
    constructor(name, addres, isClubMember) {
        this._name = name,
            this._addres = addres,
            this._isClubMember = isClubMember
    }

    // why do you need all thouse elements in the comming lines? 

    get name() {
        return this._name;
    }

    get addres() {
        return this._addres;
    }

    get isClubMember() {
        return this._isClubMember;
    }

    set name(newName) {
        _name = newName;

    }
    set addres(newAddres) {

        _addres = newAddres;

    }
    set isClubMember(newIsClubMember) {

        _isClubMember = newIsClubMember;

    }

    ifYouAreAClubMember() {
        
        if (this.isClubMember === true) {
            console.log(`  אנו שמחים על הצטפותך למועדון  ${this.name} למועדון שלום לך`);
        } else {
            return console.log("your not a club member")
        }

    }}



ofir = new Customer("ofir", "beerot", true)
tal = new Customer("tal", "kedomin", true)
chicco = new Customer("chicco", "the moon", false)
ben = new Customer("ben", "refet", false)

ofir.ifYouAreAClubMember()


