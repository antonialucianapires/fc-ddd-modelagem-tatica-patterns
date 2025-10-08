import type Address from "./address";

export default class Customer {

    private _id: string;
    private _name: string;
    private _address!: Address;
    private _active: boolean = true;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
        this.validate()
    }

    validate() {
        if(this._id.length === 0) {
            throw new Error("Id is required")
        }

        if(this._name.length === 0) {
            throw new Error("Name is required")
        }
    }

    get name(): string {
        return this._name;
    }

    changeName(name: string) {
        this._name = name;
        this.validate();
    }

    activate() {
        this._active = true;
    }

    isActive(): boolean {
        return this._active;
    }

    deactivate() {
        this._active = false;
    }

    addAddress(address: Address) {
        this._address = address;
    }

}