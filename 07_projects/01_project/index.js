const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', (event) => {
    console.log(event);
    console.log(event.target);
    e = event.target.id;
    switch (e) {
      case 'grey':
        body.style.backgroundColor = 'grey';
        break;
      case 'yellow':
        body.style.backgroundColor = 'yellow';
        break;
      case 'white':
        body.style.backgroundColor = 'white';
        break;
      case 'blue':
        body.style.backgroundColor = 'blue';
        break;
    }
  });
});
