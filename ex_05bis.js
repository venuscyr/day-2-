function getBasketContent(){ 
const fruits =[
"strawberry","strawberry","strawberry","apple","apple","lime","lime","peach","pear","pear"
]
 console.log(x + `fruit(s) selected` );
if (x > fruits.length){
console.log(`to many fruit(s) selected.`)
} fruits.spice(fruits.length-x)
return fruits;

}
let x = 8
if (typeof getBasketContent === "function") {
	const fruits = getBasketContent()
	showMyBasket(fruits)
}
