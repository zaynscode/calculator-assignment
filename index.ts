import inquirer from "inquirer";

const answer = await inquirer.prompt([{
    type: "number",
    name:"NO1",
    message:"Enter your NO1:"
},
{
    type: "number",
    name:"NO2",
    message:"Enter your NO2:"
},
{
    type:"list",
    name: "operator",
    message: "Select the operator you want to perform",
    choices:["Add","Subtract","Multiply","Divide"]

}
]);

let result: number;

switch(answer.operator){
    case "Add":
        result = answer.NO1 + answer.NO2;
        console.log("The answer for addition is:" + result);
        break;

    case "Subtract":
            result = answer.NO1 - answer.NO2;
            console.log("The answer for subtraction is:" + result);
         break;


    case "Multiply":
        result = answer.NO1 * answer.NO2;
        console.log("The answer for multiplication is:" + result);
       break;

    case"Divide":
        result = answer.NO1 / answer.NO2;
    console.log("The answer for division is: + result");
       break;




        



}

console.log(answer)