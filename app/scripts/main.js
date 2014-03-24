var text = 'Lorem Ipsum dolor Zit amet.',
    $display = document.querySelector('#display'),
    timer;
text = text.split(' ');
function next(){
  if(text.length > 1){
    $display.innerHTML = text.shift();
    timer = setTimeout(next, 60000 / 250)
  }
}
next();

document.body.addEventListener('click', function(){
  if(timer) {
    timer = clearTimeout(timer);
    return;
  }
  timer = setTimeout(next, 60000 / 250)
});

