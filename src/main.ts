import Address from "./entity/address";
import Customer from "./entity/customer";
import Order from "./entity/order";
import OrderItem from "./entity/order_item";

// agragado customer
let customer = new Customer("123", "John Doe");
const address = new Address("Street 1", 123, "city", "12345-678", "country");
customer.addAddress(address);
customer.activate();

// agregado order
const item1 = new OrderItem("1", "Item 1", 100);
const item2 = new OrderItem("2", "Item 2", 200);
const order = new Order("1", "123", [item1, item2]);
order.addItem(item1);
order.addItem(item2);

