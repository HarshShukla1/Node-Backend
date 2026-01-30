/*function greet(name)
{
     
    console.log(`Hello ${name}`)
}
greet("harsh")*/
/*
function makeTea(typeofTea)
{
    return `Making ${typeofTea}`
}
let greet = makeTea("lemon tea")
console.log(greet)*/

function orderTea(teaType)
{
    function confirmOrder(){
        return `order confirmed for chai`
    }
   return confirmOrder()
}

let orderConfirmation = orderTea("chai")
console.log(orderConfirmation)