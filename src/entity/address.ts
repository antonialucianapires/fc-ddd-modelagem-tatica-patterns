export default class Address {

    _street: string
    _number: number
    _city: string
    _zip: string
    _country: string

    constructor(street: string, number: number, city: string, zip: string, country: string) {
        this._street = street
        this._number = number
        this._city = city
        this._zip = zip
        this._country = country
        this.validate()
    }

    validate() {
        if (this._street.length === 0) {
            throw new Error("Street is required")
        }

        if (this._number <= 0) {
            throw new Error("Number must be greater than zero")
        }

        if (this._city.length === 0) {
            throw new Error("City is required")
        }

        if (this._zip.length === 0) {
            throw new Error("Zip is required")
        }

        if (this._country.length === 0) {
            throw new Error("Country is required")
        }
    }

    toString() {
        return `${this._street}, ${this._number}, ${this._city}, ${this._zip}, ${this._country}`
    }

}