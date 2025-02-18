const numbers = [];
const odds = [];
const evens = [];

function addNumber(num) {

    if (typeof num === "number") {
        numbers.push(num);
        updateBank()
    }
    return numbers;
}


function numberForm() {
    const $form = document.createElement("form");
    $form.innerHTML = `
      <label>
        Add numbers to be sorted
        <input name="number" type="number" min="1" />
      </label>
      <button>Add Number</button>
    `;

    $form.addEventListener("submit", (event) => {
        event.preventDefault();

        const data = new FormData($form);
        const count = data.get("number");
        addNumber(Number(count));
        $form.reset();
    });

    return $form;
}


function updateBank() {
    const $bank = document.querySelector("#number-bank");

    $bank.innerHTML = `
            <h2>Numbers Bank:</h2> 
            ${numbers.map(num => `${num}`).join(", ")}
        `;

}

function evenBank() {
    const $evens = document.querySelector("#evens-bank");

    $evens.innerHTML = `
        <h2>Evens:</h2> 
        ${evens.map(num => `${num}`).join(", ")}
    `;

}
function oddBank() {
    const $odds = document.querySelector("#odds-bank");

    $odds.innerHTML = `
        <h2>Odds:</h2> 
        ${odds.map(num => `${num}`).join(", ")}
    `;

}

function buttonSortAll() {
    const $buttonSortAll = document.createElement("button");

    $buttonSortAll.innerHTML = `
        Sort All Numbers
    `;

    $buttonSortAll.addEventListener("click", (event) => {


        while (numbers.length > 0) {
            const num = numbers.shift();

            if (num % 2 === 0) {
                evens.push(num);
            } else {
                odds.push(num);
            }

        }
        oddBank();
        evenBank();
        updateBank();
    })

    return $buttonSortAll;

}
function buttonSortOne() {
    const $buttonSortOne = document.createElement("button");

    $buttonSortOne.innerHTML = `
        Sort First Number
    `;

    $buttonSortOne.addEventListener("click", (event) => {
        if (numbers.length === 0) return;

        const num = numbers.shift();

        if (num % 2 === 0) {
            evens.push(num);
        } else {
            odds.push(num);
        }

        oddBank();
        evenBank();
        updateBank();
    })

    return $buttonSortOne;

}



// === Render ===
function render() {
    const $app = document.querySelector("#app");
    $app.innerHTML = `
      <h1>Odds and Evens</h1>
      <NumberForm></NumberForm>
      <p id = "number-bank"></p>
      <ButtonAll></ButtonAll>
      <ButtonOne></ButtonOne>
      <p id = "evens-bank"></p>
      <p id = "odds-bank"></p>
    `;

    $app.querySelector("NumberForm").replaceWith(numberForm());
    $app.querySelector("ButtonAll").replaceWith(buttonSortAll());
    $app.querySelector("ButtonOne").replaceWith(buttonSortOne());



}



render();