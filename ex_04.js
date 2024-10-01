let a =7;
let b =2;
let action ="add";


function calculator(){
if(action ==="add"){
return addition (a,b);
}else if(action ==="sub")
return substraction (a,b);

}
function addition(){ return a + b ;

}
function substraction(){
return a - b ;
}



// DO NOT TOUCH - This line will call calculator and display the result for you
if (typeof calculator === "function" && typeof a === "number" &&
		typeof b === "number" && typeof action === "string") {
	displayResult(calculator, a, b, action);
} else {
	console.error("Missing/bad variables or calculator function");
}
