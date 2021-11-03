// task 1
// Question-- Not sure why we took counter as parameter while there is no use of it
console.log('\nTask1')
gretter = (myArray,counter) =>{
    const greetText = "Hello"
    for(var char of myArray){
        console.log(greetText +" "+char)
    }
}
gretter(["Randy Savage","Ric Flair","Hulk Hogan"],3)

// task 2 
console.log('\nTask2')
function capitalize(word){
    let fword, rword;
    [fword,...rword] = word
    return fword.toUpperCase()+rword.join("").toLowerCase();
}
console.log(capitalize('fooBar'))
console.log(capitalize('nodeJs'))


//task 3
console.log('\nTask3')
var colors = ['red','green','blue']
var capitalize = colors.map(x=>x.charAt(0).toUpperCase()+x.substring(1))
console.log(capitalize)  

// task 4
console.log('\nTask4')
var values = [1,60,34,30,20,5]
let filterThan20 = values.filter(function(e){
    return e < 20
})
console.log(filterThan20)

// task 5
console.log('\nTask5')
var array = [1,2,3,4]
let calculateSum = array.reduce(function(sum,el){
    return sum + el;
})
let calculateProduct = array.reduce(function(sum,el){
    return sum * el;
})
console.log(calculateSum)
console.log(calculateProduct)

//task 6
console.log('\nTask6')
class Car {
    constructor(model,year){
        this.model = model
        this.year = year
    }
    detail(){
        console.log(`Model :${this.model} Engine ${this.year}`)
    }
}
class Sedan extends Car{
    constructor(model,year,balance){
        super(model,year);
        this.balance = balance;
    }
    info(){
        console.log(this.model +" has a balance of: $"+this.balance)
    }
}
const car2 = new Car("Pontiac Firebird",1976)
console.log(car2.detail())
const sedan = new Sedan("Volvo SD", 2018,30000)
console.log(sedan.info())