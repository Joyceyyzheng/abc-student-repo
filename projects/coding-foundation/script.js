let number;
function Generate(){
 number = document.getElementById('Number').value //get input value

 for (var i = 0; i < number; i++) {
   var ul = document.createElement('ul'); //create new cats
   ul.className += "jump-item";
   document.getElementById('jump').appendChild(ul);//add the cat to parent list

 }

}
