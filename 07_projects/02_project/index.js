const form = document.querySelector('form');
// const height = parseFloat(document.querySelector('#height').value) // this usecase will give u empty values

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const height = parseFloat(document.querySelector('#height').value);
  const weight = parseFloat(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === 0 || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}.`;
  } else if (weight === 0 || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}.`;
  } else {
    const bmi = ((weight * 10000) / (height * height)).toFixed(2);

    if (bmi < 18.6) {
      results.innerHTML = `<span>${bmi}\nYou are UnderWeight.</span>`;
    } else if (18.6 <= bmi < 24.9) {
      results.innerHTML = `<span>${bmi}\nYour weight is in Normal Range.</span>`;
    } else if (bmi >= 24.9) {
      results.innerHTML = `<span>${bmi}\nYou are OverWeight.</span>`;
    }
  }
});
