let number;
function beSad(){
  number = document.getElementById('Number').value //get input value

  for (var i = 0; i < number; i++) {
    var ul = document.createElement('ul'); //create new cats
    ul.className += "flex-item";//ul.className="box-item"+ul.className
    document.getElementById('flex').appendChild(ul);//add the cat to parent list

  }

}
