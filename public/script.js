let expenses = [];
let totalAmount = 0;

const categorysel = document.getElementById("category_sel");
const amountinp = document.getElementById("amount_inp");
const infoinp = document.getElementById("info_inp");
const dateinp = document.getElementById("date_inp");
const addbtn = document.getElementById("add_btn");
const Expenseincomebody = document.getElementById("Expense-income-body");
const totalAmountCell = document.getElementById("total-amount");

addbtn.addEventListener("click", function () {
  const category = categorysel.value;
  const info = infoinp.value;
  const amount = Number(amountinp.value);
  const date = dateinp.value;

  if (category === "") {
    alert("please select category");
    return;
  }
  if (isNaN(amount) || amount <= 0) {
    alert("please enter a valid amount");
    return;
  }
  if (info === "") {
    alert("please enter a valid info");
    return;
  }
  if (date === "") {
    alert("please enter a valid date");
    return;
  }
  expenses.push({ category, amount, info, date });

  if (category === "income") {
    totalAmount += amount;
  }
  if (category === "expense") {
    totalAmount -= amount;
  }
  totalAmountCell.textContent = totalAmount;

  const newRow = Expenseincomebody.insertRow();

  const categoryCell = newRow.insertCell();
  const amountCell = newRow.insertCell();
  const infoCell = newRow.insertCell();
  const dateCell = newRow.insertCell();
  const deleteCell = newRow.insertCell();

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", function () {
    expenses.splice(expenses.indexOf(expense), 1);

    if (category === "income") {
      totalAmount -= amount;
    }
    if (category === "expense") {
      totalAmount += amount;
    }
    totalAmountCell.textContent = totalAmount;
    Expenseincomebody.removeChild(new Row());
  });

  const expense = expenses[expenses.length - 1];
  categoryCell.textContent = expense.category;
  amountCell.textContent = expense.amount;
  infoCell.textContent = expense.info;
  dateCell.textContent = expense.date;
  deleteCell.appendChild(deleteBtn);
});
for (const expense of expenses) {
  if (category === "income") {
    totalAmount += amount;
  }
  if (category === "expense") {
    totalAmount -= amount;
  }
  totalAmountCell.textContent = totalAmount;

  const newRow = Expenseincomebody.insertRow();

  const categoryCell = newRow.insertCell();
  const amountCell = newRow.insertCell();
  const infoCell = newRow.insertCell();
  const dateCell = newRow.insertCell();
  const deleteCell = newRow.insertCell();

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", function () {
    expense.splice(expenses.indexOf(expense), 1);
  });
  if (category === "income") {
    totalAmount -= amount;
  }
  if (category === "expense") {
    totalAmount += amount;
  }
  totalAmountCell.textContent = totalAmount;
  Expenseincomebody.removeChild(new Row());

  const expense = expenses[expenses.length - 1];
  categoryCell.textContent = expense.category;
  amountCell.textContent = expense.amount;
  infoCell.textContent = expense.info;
  dateCell.textContent = expense.date;
  deleteCell.appendChild(deleteBtn);
}
