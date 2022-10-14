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

// const summedPrice = cart.reduce(a, c) => (a + c.price)
console.log(cart.price);


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


const calcFinalPrice = (cartTotal, couponValue, tax) => {
    const applyTaxCoupon = cart.reduce((a, c) => a + c.price*(1-tax))
    return (applyTaxCoupon - couponValue)
}

calcFinalPrice(cart, 1, 0.6)
console.log(cart)



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
    The restaurant would need: 
// 1.The customers Name . The restaurant needs to know who's ordering the food. this Should be a String. 
// 2. Phone Number or email . The restaurant needs to know contact number to get notified. Should be a string datatype. Could also be a number or a text  
// 3. Any food allergies. The restaurant needs to know if the customer has any  allergies.  this Should be a string
// 4. Zipcode.The restaurant needs to know the zicode to check the delivery availability. Shoud be a number datatype. 
// 5. Whether the customer would like to receive a notification  from the restaurant to confirm their orders or update them on their deliveries
    
    
    

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customer =[{
    name : "Abdi"},
    {phoneNumber: '222-222-2222'},
    {Allergies: "Peanuts"},
    {Zipcode: 55021},
    {receiveText: ["Yes", "No"]}
]





