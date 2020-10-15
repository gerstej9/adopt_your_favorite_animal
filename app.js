
var animal = prompt("What's your Favorite Animal?");

if (isNaN(Number(animal)))
if(animal == 'Dragon'){
    alert(`You love ${animal}'s they are the best!`); // You are 100 years old!
} else {
    alert(`You love ${animal}'s that really cool!`); // You are 100 years old!

}
else { alert("That's not an animal");
}
    
function dragon(animal){
    
    html = document.write('<h2>' + animal + "'s ROOOOCK! </h2>")
    return html
}

function favAnimal(animal){
    
    html = document.write('<h1>' + animal + '</h1>')
    return html
}
