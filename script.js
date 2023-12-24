// prompt("HI How many seats Do You Have in your Car ?");

// THIS IS WILL INCREMENT THE NUMBER ENTERED
let count = 0;
let countEl = document.getElementById("count-el");
let totalPassenger = document.getElementById("totalPassenger");
function increment() {
  count++;
  countEl.textContent = count;
  console(count);
}

//

let saveEl = document.getElementById("save-el");

function save() {
  let constStr = count + " - ";
  totalPassenger.textContent += count + "+";

  saveEl.textContent += constStr;
  count = 0;
  countEl.textContent = count;
  return totalPassenger;
}
