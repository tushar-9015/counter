const value = document.querySelector('.value');
const increaseBy = document.querySelector('#increase');
const decreaseBy = document.querySelector('#decrease');
const changeBy = document.querySelector("#input-val");
const reset = document.querySelector('#reset');

// function increase(){
//     value.textContent = Number(value.textContent) + changeByInput.valueAsNumber
// }

// increaseBy.addEventListener('click', function () {
//     increase();
// })

increaseBy.addEventListener('click', () => {
    value.textContent = +value.textContent + changeBy.valueAsNumber;
  });

decreaseBy.addEventListener('click', () => {
    value.textContent = parseInt(value.textContent) - parseInt(changeBy.valueAsNumber);
})

reset.addEventListener('click', () => {
    value.textContent = 0;
    changeBy.valueAsNumber = 1;
})


changeBy.addEventListener('change', () => {
    const changeByValue = changeBy.valueAsNumber;
  
    if (Number.isNaN(changeByValue)) {
      changeBy.value = 1;
    } else if (changeByValue < 0) {
      changeBy.value = 1;
    }
  });