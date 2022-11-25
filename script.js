

let user = prompt("Give me a number")

const loop = (num) =>{
    if(!isNaN(num)){
        for(num; num >= 0; num -= 1){
            if(num < 50){
                alert(`Currently at ${num} terminating the loop...`)
                break;
            }
        }
    }else{
        alert(`Should be number...`)
    }
    return num
}

loop(user)

let userInput = prompt("Enter a number");

const countRotation = (num) =>{
    if(!isNaN(num)){
        for (num; num >= 0; num--){
            if (num % 10 === 0) {
                console.log(`The number ${num} is ivisible by 10. Skipping the number`)
                continue;
            } else if(num % 5 === 0) {
                console.log(`The number ${num} is ivisible by 5`) 
            }
        }
    }else{
        alert(`Should be number...`)
    }
        return num
}

 
console.log(countRotation(userInput));