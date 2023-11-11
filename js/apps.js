let height = Number(prompt('Enter Your Height : ( FT )'));
let weight = Number(prompt('Enter Your Weight :( KG )'));

let bmi = weight / ((height * 0.3048)**2);

if(bmi <= 18.5){
document.querySelector('h1').innerText = 'Your weight is : Under'
}else if(bmi >=18.5 && bmi <= 24.9){
    document.querySelector('h1').innerText = 'Your weight is : Normal'
}else if(bmi >= 25 && bmi <= 29.9){
    document.querySelector('h1').innerText = 'Your weight is : Over'
}else if(bmi >= 30 && bmi <= 34.9){
    document.querySelector('h1').innerText = 'Your weight is : Obesity'
}else if(bmi >= 35 && bmi <= 39.9){
    document.querySelector('h1').innerText = 'Your weight is : Extreme Obesity'
}else{
    document.querySelector('h1').innerText = 'Enter the Height and Weight :'
}
