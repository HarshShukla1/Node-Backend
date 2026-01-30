/*const calculateTotal =(price , quantity)=> price*quantity

let totalCost = calculateTotal(499*100)*/
/*
function makeTea(typeofTea){
    return `Make : ${typeofTea}`
}


function processTeaOrder(makeTea)
{
    return teaFunction('earl grey')
}
let order = processTeaOrder(makeTea)
console.log(order)*/

function createTeaMaker()
{
    return function(teaType){
        return `Making ${teaType}`;
    }
}
let teaMaker = createTeaMaker();
let result = teaMaker("green tea")
console.log(result)

