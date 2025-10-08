import Address from "./address";
import Customer from "./customer";

describe("Customer unit tests", () => {

    it("should throw error when id is empty", () => {
        expect(() => {
            let customer = new Customer("", "John");
        }).toThrow("Id is required");
    });

    it("should throw error when name is empty", () => {
        expect(() => {
            let customer = new Customer("123", "");
        }).toThrow("Name is required");
    });

    it("should change name", () => {
        let customer = new Customer("123", "John");

        customer.changeName("Jane");

        expect(customer.name).toBe("Jane");
    });

    it("should activate customer", () => {
        let customer = new Customer("123", "John");
        const address = new Address("Street 1", 123, "city", "12345-678", "country");
        customer.addAddress(address);

        customer.activate();

        expect(customer.isActive()).toBe(true) ;
    });

    it("should deactivate customer", () => {
        let customer = new Customer("123", "John");

        customer.deactivate();

        expect(customer.isActive()).toBe(false);
    });

});