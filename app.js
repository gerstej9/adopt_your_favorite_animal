
var animal = prompt("What's your Favorite Animal?").toLowerCase();

while ((isNaN(Number(animal))) == false) {
    animal = prompt("That's not an animal! What's your Favorite Animal? ").toLowerCase();
}
if(animal == 'dragon'){
    alert(`We love ${animal}'s they are the best!`); // You are 100 years old!
} else {
    alert(`You love ${animal}'s that really cool!`); // You are 100 years old!
}

function myFunction() {
    var howMany = prompt("How many animals would you like to adopt")
    while ((isNaN(Number(howMany))) == true) {
        howMany = prompt("That's not a number!");}
    var dragons = displayDragon(howMany)
    var imagesSection = document.getElementById('images')
    imagesSection.innerHTML = (dragons + " You're Adopting " + howMany + " Animals!! Great Job!!")
}

function displayDragon(count) {
    var image;
    image = '<img src= "ivan-aleksic-gA31jyZAXZU-unsplash.jpg" width = "75" height = "75">';

    return buildOrder(image, count)
};

var buildOrder = function(img, count) {
    var output = '';
  
    for (var index = 0; index < count; index++) {
      output += img; // equivalent to: output = output + image;
    }
    return output;
  }

function dragon(animal){
    animal = (animal).toUpperCase()
    html = document.write('<h2>' + animal + "'s ROOOOCK! </h2>")
    return html
}

function favAnimal(animal){
    animal = (animal).toUpperCase()
    html = document.write('<h1>' + animal + '</h1>')
    return html
}


