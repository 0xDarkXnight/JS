function color() {
    const hex = '0123456789ABCDEF';
    let randomColor = '#';
    for (i = 0; i < 6; i++) {
      randomColor += `${hex[Math.floor(Math.random() * 16)]}`;
    }
    document.querySelector('body').style.backgroundColor = randomColor;
  }
  let interval;
  document.querySelector('#start').addEventListener('click', () => {
    interval = setInterval(color, 1000);
    document.querySelector('#stop').addEventListener('click', () => {
      clearInterval(interval);
    });
  });
  