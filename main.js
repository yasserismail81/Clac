let display=document.getElementById("display");
function insert(input){
    display.value+= input
}

function clearDisplay(){
    display.value="";
}

function equal(){
   try{
    display.value=eval(display.value)}
    catch{
        display.value="Error"
    }
}
function back(){
    let currentContent=display.value;
    display.value=currentContent.substring(
        0,currentContent.length -1
    )


}












































// let myString=document.getElementById("textLook");


// function insert(num){
//     // let myString=document.textLook.value;
//     let lastChar=myString[myString.length-1];
//     if(myString.length<30){
//         if(!isNaN(lastChar)|| lastChar==null || !isNaN(num)){
//             document.textLook.value = myString + num
//         }else if(num != lastChar){
//             document.textLook.value =myString.replace(lastChar , num)
//         }
//     }
// }
// function equal(){
//     let sum = document.textLook.value;
//     if(sum){
//         document.textLook.value= eval(sum);

//     }

// }
// function clear(){
//     textLook.textContent="";

// }
// function back(){
//     let exp = document.textLook.value;
//     document.write (textLook.value=exp.substring(0 , exp.length -1))
// }
