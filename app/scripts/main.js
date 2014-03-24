var text = 'Lorem Ipsum dolor Zit amet.',
    $display = document.querySelector('#display');
text = text.split(' ');
function next(){
  if(text.length > 1){
    $display.innerHTML = text.shift();
    setTimeout(next, 60000 / 250)
  }
}
next();
