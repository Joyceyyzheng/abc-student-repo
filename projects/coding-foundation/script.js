
var number;
function beSad(){
  number = document.getElementById('Number').value //get input value
  for (var i = 0; i < number; i++) {
    var newDuck = document.createElement('newDuck'); //create new duckling

    newDuck.className += "flex-item";//ul.className="flex-item"+ul.className
    document.getElementById('flex').appendChild(newDuck);

  }

}
