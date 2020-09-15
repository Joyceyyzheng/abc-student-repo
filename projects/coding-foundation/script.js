let number;
function beSad(){
  number = document.getElementById('Number').value //get input value

  for (var i = 0; i < number; i++) {
    var ul = document.createElement('ul'); //create new cats
    ul.className += "box-item";
    document.getElementById('box').appendChild(ul);//add the cat to parent list

  }

}
