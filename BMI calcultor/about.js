


function BMIcalcul(weight,height) {
    let bodyWeight = (weight/(height*height)).toFixed(2);
    console.log(`bmi calulcult ${bodyWeight}`)
}
// BMIcalcul(70,5.5)

if(bodyWeight < 18.5){
    console.log("your are the underweight")
}
else if( bodyWeight >= 18.5 && bodyWeight <= 24.5){
    console.log("your are normal weight")
}
else if(bodyWeight >= 24.5 && bodyWeight <= 29.9){
    console.log("your are overweight")
}
else{
    console.log("its obses cagetroy")
}

function calculPerf(){
    console.log("welcome to BMI calcultor")
    let userWeight = parseFloat(prompt("please enter your weight"))
    let userHeight = parseFloat(prompt("please enter your height"))
    if(isNaN(weight) ||  isNaN(height) || height <= 0 || weight <= 0){
        console.log("enter valide weight and height")
        return;
    }
    BMIcalcul(userWeight, userHeight)
}
calculPerf();