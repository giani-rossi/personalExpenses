
  /*
const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

// const dummyTransactions = [
//   { id: 1, text: 'Flower', amount: -20 },
//   { id: 2, text: 'Salary', amount: 300 },
//   { id: 3, text: 'Book', amount: -10 },
//   { id: 4, text: 'Camera', amount: 150 }
// ];

/*

class User {
	constructor({name, password}) {
		this.name = name
		this.password = password
    }
}



const users = JSON.parse(localStorage.getItem("users")) || []
const inputName = document.querySelector('#user')
const inputPassword= document.querySelector('#passw')
const validation = document.getElementById('validation')

function createUser (){
   
  let name = inputName.value
    let password = inputPassword.value
    
    if(inputName.value.length < 4){
      $("#validation").html("EL nombre de usuario debe tener como minimo 4 caracteres")
		validation.style.color = "red"
    }

  else if (inputPassword.value.length < 4) {

		$("#validation").html("La clave debe tener 4 caracteres o más") 
		validation.style.color = "red"

  }
  else {
    // Si se cumplen los requisitos va a crear el usuario utilizando la clase Usuario
const userCreated = {name:name, password: password}
const user = new User(userCreated)

users.push(user)
validation.style.color = "green"
localStorage.setItem("users", JSON.stringify(users))
inputNombre.value = "";
inputClave.value = "";
validation.innerHTML = "Usuario registrado con éxito"
login.style.display = "block"
btnRegistro.style.display = "none"
linkRegistro.style.display = "block"

    //Ponemos un setTimeout para limpiar el mensaje "Usuario registrado con éxito" luego de 2 segundos
setTimeout(() => {
  validation.innerHTML = ""
}, 2000
)

  }

}








const localStorageTransactions = JSON.parse(localStorage.getItem('transactions')); //JSON.parse por getItem

let transactions = localStorage.getItem('transactions') !== null ? localStorageTransactions : []

// Add transaction
function addTransaction(e) {
  e.preventDefault();

  if (text.value.trim() === '' || amount.value.trim() === '') {
    alert('Please add a text and amount');
  } else {

    
    const transaction = {
      id: generateID(),
      text: text.value,
      amount: +amount.value
    };

    transactions.push(transaction);

    addTransaction(transaction);

    updateValues();

    updateLocalStorage();

    text.value = '';
    amount.value = '';
  }
}

// Generate random ID
function generateID() {
  return Math.floor(Math.random() * 100000000);
}

// Add transactions to DOM list
function addTransaction(transaction) {
  // Get sign
  const sign = transaction.amount < 0 ? '-' : '+';

  const item = document.createElement('li');

  // Add class based on value
  item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');

 item.innerHTML = `${transaction.text} <span> ${sign}${Math.abs(transaction.amount)} </span>
   <button class="delete-btn" onclick="removeTransaction(${transaction.id})"> ELIMINAR </button>`;

  list.appendChild(item);
}

// Update the balance, income and expense
function updateValues() {
  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  balance.innerText = `$${total}`;
  money_plus.innerText = `$${income}`;
  money_minus.innerText = `$${expense}`;
}






// Remove transaction by ID
function removeTransaction(id) {
  transactions = transactions.filter(transaction => transaction.id !== id);

  updateLocalStorage();

  init();
}

// Update local storage transactions
function updateLocalStorage() {
  localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Init app
function init() {
  list.innerHTML = '';

  transactions.forEach(addTransaction);
  updateValues();
}

init();

form.addEventListener('submit', addTransaction);


*/

const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

// const dummyTransactions = [
//   { id: 1, text: 'Flower', amount: -20 },
//   { id: 2, text: 'Salary', amount: 300 },
//   { id: 3, text: 'Book', amount: -10 },
//   { id: 4, text: 'Camera', amount: 150 }
// ];

const localStorageTransactions = JSON.parse(
  localStorage.getItem('transactions')
);

let transactions =
  localStorage.getItem('transactions') !== null ? localStorageTransactions : [];

// Add transaction
function addTransaction(e) {
  e.preventDefault();

  if (text.value.trim() === '' &&  amount.value.trim() === '') {
    alert('Please add a text and amount');
  } else {
    const transaction = {
      id: generateID(),
      text: text.value,
      amount: +amount.value
    };

    transactions.push(transaction);

    addTransactionDOM(transaction);

    updateValues();

    updateLocalStorage();

    text.value = '';
    amount.value = '';
  }
}

// Generate random ID
function generateID() {
  return Math.floor(Math.random() * 100000000);
}

// Add transactions to DOM list
function addTransactionDOM(transaction) {
  // Get sign
  const sign = transaction.amount < 0 ? '-' : '+';

  const item = document.createElement('li');

  // Add class based on value
  item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');

  item.innerHTML = `
    ${transaction.text} <span>${sign}${Math.abs(
    transaction.amount
  )}</span> <button class="delete-btn" onclick="removeTransaction(${
    transaction.id
  })"> ELIMINAR </button>
  `;

  list.appendChild(item);
}

// Update the balance, income and expense
function updateValues() {
  const amounts = transactions.map(transaction => transaction.amount);

  Number(amounts)

  //parseInt(amounts.reduce((acc, item) => (acc += item), 0)).toFixed(2);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  const total = Number(Number(income) + Number(expense))
  total.toFixed(2)
  balance.innerText = `$${total}`;
  money_plus.innerText = `$${income}`;
  money_minus.innerText = `$${expense}`;
}

// Remove transaction by ID
function removeTransaction(id) {
  transactions = transactions.filter(transaction => transaction.id !== id);

  updateLocalStorage();

  init();
}


$('.btn-borrar').click(function(transaction){
 





     transaction = {
      id: '',
      text: '',
      amount:''
    };

   

    

    

    balance.innerText = '';
    money_plus.innerText = ''
    money_minus.innerText = '';
    total = '';
    expense='';
    income='';
    
     updateLocalStorage();


    

      item = ''
   
   
     item.innerHTML = '';
   
   //  list.appendChild(item);

  })
  





// Update local storage transactions
function updateLocalStorage() {
  localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Init app
function init() {
  list.innerHTML = '';

  transactions.forEach(addTransactionDOM);
  updateValues();
}

init();

form.addEventListener('submit', addTransaction);

