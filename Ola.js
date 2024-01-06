let btn1=document.getElementById('button1')
let btn2=document.getElementById('button2')
let btn3=document.getElementById('button3')
let bike=document.getElementById('bike')
let auto=document.getElementById('auto')
let car=document.getElementById('car')
let div=document.getElementById('result')


bike.addEventListener("input",function(){
    const value=this.value
    if(value !==""){
        auto.value=""
        car.value=""
    }
    else{
        console.log(`This function has been called from the global scope`);
    }
})
btn1.addEventListener("click",()=>{
    div.innerHTML=`Your total cost is ${bike.value*12} RS/-`
    div.style.color="#4b0082	"
    div.style.fontWeight="bolder"
    div.style.fontSize="30px"
    div.style.fontFamily="Poppins"
})
auto.addEventListener("input",function(){
    const value1=this.value
    if(value1 !==""){
        bike.value=""
        car.value=""
    }
    else{
        console.log(`This function has been called from the global scope`);
    }
})


btn2.addEventListener("click",()=>{
    div.innerHTML=`Your total cost is ${auto.value*20} RS/-`
    div.style.color="#cd5c5c"
    div.style.fontWeight="bolder"
    div.style.fontSize="30px"
    div.style.fontFamily="Poppins"

})

car.addEventListener("input",function(){
    const value2=this.value
    if(value2 !==""){
        bike.value=""
        auto.value=""
    }
    else{
        console.log(`This function has been called from the global scope`);
    }
})
btn3.addEventListener("click",()=>{
    div.innerHTML=`Your total cost is ${car.value*30} RS/-`
    div.style.color="#008080"
    div.style.fontWeight="bolder"
    div.style.fontSize="30px"
    div.style.fontFamily="Poppins"

})



