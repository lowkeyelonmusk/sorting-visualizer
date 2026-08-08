const generateBtn = document.querySelector("#generate-btn");
const arrayContainer = document.querySelector("#array-container");
const sortBtn = document.querySelector("#sort-btn");

const generateElement = () => Math.floor(Math.random() * 100) + 1

const generateArray = () => {
  const result = [];
  for (let i = 0; i < 5; i++) result.push(generateElement())
  return result
}

const generateContainer = () => {
  return document.createElement("div")
}

const fillArrContainer = (el, arr) => {
  for (let i = 0; i < 5; i++) {
    el.innerHTML += `<span>${arr[i]}</span>`
  }
}

const isOrdered = (num1, num2) => num1 <= num2

const swapElements = (arr, index) => {
  if (!isOrdered(arr[index], arr[index + 1])) {
    const temp = arr[index];
    arr[index] = arr[index + 1];
    arr[index + 1] = temp
  }
}

const highlightCurrentEls = (el, i) => {
  const current = el.children[i];
  const next = el.children[i + 1];
  current.style.border = "2px dashed red";
  next.style.border = "2px dashed red"
}

generateBtn.addEventListener("click", () => {
  arrayContainer.innerHTML = `<div id="starting-array"></div>`;
  const random = generateArray();
  fillArrContainer(arrayContainer.querySelector("#starting-array"), random)
  sortBtn.style.display = "block"
})

sortBtn.addEventListener("click", () => {
  const numbers = [];
  const startingArr = arrayContainer.querySelector("#starting-array");
  highlightCurrentEls(startingArr, 0)
  startingArr.querySelectorAll("span").forEach(s => Number(numbers.push(s.textContent)));
  const numerals = numbers.map(n => Number(n));

  for (let i = 0; i <= numerals.length - 1; i++) {
    let swapped = 0;
    for (let j = 0; j < numerals.length - 1; j++) {
      if (i === 0 && j === 0) {
        swapElements(numerals, j) 
        continue 
      }

      if (numerals[j] > numerals[j + 1]) swapped += 1
      const divElement = generateContainer();
      
      fillArrContainer(divElement, numerals);
      highlightCurrentEls(divElement, j);  
      swapElements(numerals, j);
      arrayContainer.appendChild(divElement);
    }

    if (swapped === 0) break
  }

  const sortedDiv = generateContainer();
  fillArrContainer(sortedDiv, numerals);
  sortedDiv.style.border = "4px solid green"
  arrayContainer.appendChild(sortedDiv)
  sortBtn.style.display = "none"
  
})