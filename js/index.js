// Iteration 1: Names and Input

console.log("I'm ready!");

let hacker1="jada"

console.log(`The drivers name is ${hacker1}` );

let hacker2="fabian"

console.log(`The navigators name is ${hacker

//Iteration 2: Conditionals

if(hacker1.length>hacker2.length){
  console.log(`${hacker1} has the longest name, it has ${hacker1.length}`)
} 
else if (hacker1.length<hacker2.length){
    console.log(`It seems ${hacker2} has the longest name, it has ${hacker2.length} letters`)
} 
else{
  console.log(`Wow, you both have equally long names, ${hacker1.length}, ${hacker2.length} characters`)
}

//Iteration 3: Loops

console.log(`${hacker1.split("").join(" ").toUpperCase()}`)


console.log(hacker2.split("").reverse().join(""))


let arr =[hacker1,hacker2];
arr.sort();

if(hacker1.localeCompare(hacker2) === -1){
  console.log(`The driver's name goes first`)
} else if (hacker1.localeCompare(hacker2) === 1){
  console.log(`Yo, the navigator goes first definitely.`)
} else {
  console.log(`What?! You both have the same name?`)
}

//BONUS 1 

const text="Contrary to popular belief, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies lacus sed tortor tristique venenatis. Morbi lacinia vulputate semper. Fusce purus lacus, iaculis eget fermentum vel, volutpat vel augue. Fusce dictum enim accumsan ipsum interdum, vitae varius nulla congue. Ut sit amet nibh luctus, egestas turpis nec, congue elit. Vivamus ut leo augue. Phasellus molestie tincidunt mi at ullamcorper. Proin tristique massa non rhoncus suscipit. Etiam id est elit. Proin leo orci, maximus eu lacus et, vestibulum malesuada risus."

console.log(text.split(" ").length);

console.log(text.split("et").length)

//BONUS 2

function phraseToCheck(str) {
  return true;
}
phraseToCheck("eye");