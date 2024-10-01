fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"];

function getIndexFromName(name) {
    let index = fruits.indexOf(name)
    return index;
}
 
displayResult(getIndexFromName("Mango"))
