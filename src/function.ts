function myInfo() : void { // function declaration

    //function body

 console.log("Hi my name is wania ali");
 console.log("I am from Pakistan");
 console.log("I am a teacher");

 console.log("===============");
}

myInfo(); //invoke function
myInfo();
myInfo();
myInfo();

//function with required parameters

function myInfoWithParameter(name : string, country : string, job : string) : void {
     //function body
     console.log("Hi my name is" , name); // argument pass log
     console.log(`I am from ${country}`); //template string
     console.log("I am a " + job); //concatenation
    
     console.log("+=================+");

}

myInfoWithParameter("Wania","Pakistan","Teacher");
myInfoWithParameter("Ali","USA","Teacher and Programer");
myInfoWithParameter("Ahmed","Pakistan", "typescript programer");

//function with default paramerters

function myInfoDefaultParamerters(name : string = "Aisha" , country : string = "Pakistan" , job : string = "software engineer") : void {
// function body
 console.log("Hi my name is" , name); // argument pass log
 console.log(`I am from ${country}`); // temple string
 console.log("I am a " + job); //concatenation

 console.log("______________________");

}

myInfoDefaultParamerters("Wania", " Pakistan", "Teacher");
myInfoDefaultParamerters("Ahmed" , "Pakistan");
myInfoDefaultParamerters();

// function with optional parameters

function myInfoWithOptionalParamerters(name : string , country : string , job? : string) :void {

    //function body
    console.log("Hi i am " , name) //argument pass log
    console.log(`I am from ${country}`); // temple string

    if(job) {
        console.log("I am a " + job); // concatenation
    }

    console.log("+=============+")

}

myInfoWithOptionalParamerters("Noor fatima" , " Pakistan " , "Housewife");
myInfoWithOptionalParamerters("Zainab" , "Pakistan");

//function with return type

function myFunctionWithReturnType( n1 : number , n2 : number) : number {

    return n1 + n2;

}
const result : number = myFunctionWithReturnType( 20 ,25);
console.log(result);
console.log(myFunctionWithReturnType(100 , 20)); 

function subtract ( n1 : number , n2 : number ,n3 : number) : number {

    return n1 - n2 + n3;


}

const solution : number = subtract(30, 30 ,50);
console.log(solution);

//function that hoisted

logDate();

function logDate() : void {

    const date : Date = new Date();
    console.log(date);
}

// function expression

const myInfoWithFunctionExpression = function () : void {

    // function body

    console.log("Hi my name is Wania Ali");
    console.log("I am from Pakistan");

    console.log("----------------");
}

myInfoWithFunctionExpression();

const myIntro = function () : void {
 
    // function body

    console.log("Hello my name is Nadia Owais");
    console.log("I am from Karachi");
    console.log("I am a housewife");

    console.log("==============");
}

myIntro();

// self invoking function

(function () {

    // function body
    console.log(" Hi I am Wania Ali from Karachi");

})();

// arrow function 

const myMultiplicationWithArrowFunction = ( num1 : number ,num2 : number) => num1 * num2;

const result2 : number = myMultiplicationWithArrowFunction ( 10, 20);
console.log(result2);

const myDivisionWithArrowFunction = (number1 : number , number2 : number) => number1 / number2;

const result3 : number = myDivisionWithArrowFunction (25 ,5)
console.log(result3)

// before arrow function expression

const beforArrowFunction = function (num1 : number , num2 : number) : number {

    return num1 - num2
}
console.log(beforArrowFunction(145 , 123));

// arrow function with rest parameters

const sumAllNumbers = (message : string , ...numbers : number[]) : number | void => {

    console.log( numbers);
    console.log (typeof numbers);
    console.log(message);

    let total : number =0;
    for ( const number of numbers) {
total += number ; // total = total + number
    }

    return total;
}

const result4 : number | void = sumAllNumbers (" Hello i am rest parameters function" , 1 ,2 , 3 , 4, 5, 6 ,7 ,8, 9, 10);

console.log(result4);







 


