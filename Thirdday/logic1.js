/**alert("enter a number")
let name=prompt("enter your name");
console.log(name);


let number=prompt("enter a number");
if(number%5===0){
 alert("number is multiple by 5")   
}else{
    alert("number is not multiply by5")
}

let number=prompt("enter a number");
let grade;
if(number>=90&&number<=100){

console.log("A");

}else if(number>=80&&number<=89){
    
    console.log("B");
    
}else if(number>=70&&number<=79){
    
    console.log("c");
    
}else if(number>=60&&number<=69){
    
    console.log("d");
    
}else{
   console.log("fail")
}
**/

let score=prompt("enter a number")
let grade;
if (score >= 90 && score <= 100) {
  grade = "A";
} else if (score >=70 && score <=89) {
  grade = "b";
}
else if(score>=60&&score<=69){
    grade="c"
}else if(score>=50&&score<=59){
    grade="d"
}else if(score>=40&&score<=39){
    grade="e"
}else  if(score>=30&&score<=29){
    grade="fail"
}
console.log("according to your score ,your grade is=",grade)
