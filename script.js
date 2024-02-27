let btnE1 = document.querySelector('button');
let Height = document.querySelector("#height");
let Weight = document.querySelector("#weight");
let pE1 = document.querySelector("#heightalrt");
let pE2 = document.querySelector("#weightalrt");
let result = document.querySelector(".result")

btnE1.addEventListener('click', function(e){
    e.preventDefault()
    const height = parseInt(Height.value)
    const weight = parseInt(Weight.value)

    if (height == "" || height < 0 || isNaN(height) ) {
        pE1.style.display = "block"
    }else if(weight == "" || weight < 0 || isNaN(weight) ) {
        pE2.style.display = "block"
    }else{
        var Bmi = (weight /(height * height) * 10000).toFixed(2);
        result.innerHTML = `Bmi is : ${Bmi}`

        if(Bmi <= 18.4 ){
            result.innerHTML = `Bmi is : ${Bmi} Underweight`;
        }else if(Bmi >= 18.5 && Bmi < 24.9){
            result.innerHTML = `Bmi is : ${Bmi} Normal`;
        }else{
            result.innerHTML = `Bmi is : ${Bmi}  Overweight`;
        }
    }

})
