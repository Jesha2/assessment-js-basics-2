///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

// const summedPrice = cart.reduce(/* CALLBACK HERE */)
const summedPrice = cart.reduce(((acc, curr)=>acc + curr.price),0)
console.log(summedPrice);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

let calcFinalPrice = (cartTotal,couponValue,tax)=> cartTotal*(1+tax) - couponValue;

console.log(calcFinalPrice(50,10,.06));

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    Id : number (To keep track and primary key to refer to this object)
    Name : String ( To have the name printed on the order receipt
    Phone : String (To contact the customer if need be or use this as a primary key)
    Address:String ()The address of the customer for delivery.// can have another address object too instead of string
    Email Address :String (To forward the receipt and also for contact and also to send offers, deals and other marketing info's to the customer)
    Order: String Array : To store the order of the customer. This can itself be a different object
    Payment Method : String //To keep track if cash,credit card , online etc
    

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
let customer = {
    id : 1,
    name : "Jesha",
    phone : "832-8324-832",
    address : "123 street, city State,zipCode",
    email: "jesha@gmail.com",
    order: ["Coke","Hummus","Shawarma"],
    payment_method: "Credit Card"
}
console.table(customer);