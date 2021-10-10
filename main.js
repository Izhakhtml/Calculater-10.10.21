// let allButtonByClass = document.getElementsByClassName("btn")
// let inputButton = document.getElementsByClassName("input")
// !......................... one way ..........................//
// function calculateNumbers() {
//     for (let i = 0; i < inputButton.length; i++) {
//         let button = inputButton[i]
//         button.onclick = () => {
//             switch (button.value) {
//                 case "AC":
//                     displayNumbers.value = ""
//                     break;
//                 case "B":
//                     displayNumbers.value = displayNumbers.value.substring(0, displayNumbers.value.length - 1)
//                     break;
//                 case "=":
//                     displayNumbers.value = eval(displayNumbers.value)
//                     break;
//                 default:
//                     displayNumbers.value += button.value
//                     break;
//             }
//         }
//     }
// }
// calculateNumbers()

// !......................... second way ..........................//

// let numbers = document.getElementsByClassName("numbers")
// let operators = document.getElementsByClassName("operators")
// let number;
// let operator; 
// let boolean = false

// function numbersFun() {
// for (const numberItem of numbers) {
//     numberItem.onclick = ()=>{
//     num(numberItem.value)   
//    }
// }    
// }
// numbersFun()

// function num(number) {
//     if (boolean == true) {
//         input.value = ""
//         boolean = false
//     }
//  return  input.value += number
// }

// function operatorsFun() {
// for (const operatorItem of operators) {
//     operatorItem.onclick = ()=>{
//     operator = operatorItem.value
//     boolean = true
//     number = Number(input.value)
//     } 
// } 
// }
// operatorsFun()
// ///////////////////////////////////////////////////
// function calculate(num1,num2,oper) {
//     switch (oper) {
//             case "+":  
//             return num1+num2
//             case "-":  
//             return num1-num2
//             case "/":  
//             return num1/num2
//             case "*":
//             return num1*num2    
//         default:
//             break;
//     }
// }
// equal.onclick = ()=>{
// input.value = calculate(number,Number(input.value),operator)   
// console.log(number); 
// console.log(Number(input.value));
// console.log(operator);
// }

// ////////////////////////////////////////////////////////////

// function deleteRow() {
// deleteRow.onclick = ()=>{
// input.value = ""
// } 
// }
// deleteRow()

// function deleteLastLetter() {
// lastLetter.onclick = ()=>{
// input.value = input.value.substr(0,input.value.length-1)
// }    
// }
// deleteLastLetter()




let numbers = document.getElementsByClassName("numbers")
let operators = document.getElementsByClassName("operators")
let equal = document.getElementById("equal")
let firstNumber;
let secondNumber;
let operator; 
let result
let boleean = false
function calculate(num1,num2,oper) {  ////case
    switch (oper) {
        case "+":
     result = input.value= num1+num2
            return
            case "-":
                result = input.value= num1-num2
                
             return
                 case "/":
                    result = input.value=  num1/num2
                    
                return
                     case "*":
                        result = input.value= num1*num2
                         
                         return               
        default:
            break;          
    }
    
    input.value = result
    
}

function getNumber(num) {
    if (boleean == true) {
        input.value = ""
        boleean = false
    }
  return input.value += num
}
for (const firstItem of numbers) {
    firstItem.onclick = ()=>{
    getNumber(firstItem.value)  
    firstNumber = Number(input.value)
}
}
for (const secondItem of operators) {
    secondItem.onclick = ()=>{
        operator = secondItem.value
        boleean = true  
        secondNumber = Number(input.value)
      }
}
equal.onclick = ()=>{
 calculate(firstNumber,secondNumber,operator)
 input2.value = input.value
}
deleteRow.onclick = ()=>{
  input.value = ""
}
lastLetter.onclick = ()=>{
  input.value = input.value.substr(0,input.value.length-1)

}













































