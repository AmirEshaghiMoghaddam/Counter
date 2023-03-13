// first solution/////////////////////////////////////////
// accessing the elements
// let decrease = document.querySelector('.btn.decrease');
// let reset = document.querySelector('.btn.reset');
// let increase = document.querySelector('.btn.increase');
// let count = 0;
// let value = document.querySelector('#value');


// // events
// decrease.addEventListener('click', function () {
//      console.log('decrease');
//      count--;
//      value.textContent = count;
// })
// reset.addEventListener('click', function () {
//      console.log('reset');
//      count = 0;
//      value.textContent = count;
// })
// increase.addEventListener('click', function () {
//      console.log('increase');
//      count++;
//      value.textContent = count;
// })
////////////////////////////////////////////////////////////
// second solution
let count = 0;
// accessing elements
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
     btn.addEventListener("click", function (e) {
          const styles = e.currentTarget.classList;
          if (styles.contains("decrease")) {
               count--;
          } else if (styles.contains("increase")) {
               count++;
          } else {
               count = 0;
          }
          // coloring
          if (count > 0) {
               value.style.color = "green";
          }
          if (count < 0) {
               value.style.color = "red";
          }
          if (count === 0) {
               value.style.color = "#222";
          }
          value.textContent = count;
     });
});




