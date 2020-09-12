export function getHeaders() {
  const header = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  return header;
}

//get all incomes
export async function getIncomes() {
  const res = await fetch("/api/incomes", {
    headers: getHeaders(),
  });

  if (res.status > 299) {
    return Promise.reject("not authorised");
  }

  return await res.json();
}

//add income
export async function addIncome(incomeDetails) {
  const res = await fetch("/api/incomes", {
    method: "POST",
    body: JSON.stringify(incomeDetails),
    headers: getHeaders(),
  });
  return await res.json();
}

//update income
export const updateIncome = async (id, incomeDetails) => {
  const res = await fetch(`/api/incomes/${id}`, {
    method: "PATCH",
    body: JSON.stringify(incomeDetails),
    headers: getHeaders(),
  });
  return await res.json();
};

//delete income
export async function delIncome(id) {
  const res = await fetch("/api/incomes/" + id, {
    method: "DELETE",
    headers: getHeaders(),
  });
  return await res.json();
}

//get all expenses
export async function getExpenses() {
  const res = await fetch("/api/expenses", {
    headers: getHeaders(),
  });

  if (res.status > 299) {
    return Promise.reject("not authorised");
  }

  return await res.json();
}

//add expense
export async function addExpense(incomeDetails) {
  const res = await fetch("/api/expenses", {
    method: "POST",
    body: JSON.stringify(incomeDetails),
    headers: getHeaders(),
  });
  return await res.json();
}

//update expense
export const updateExpense = async (id, expenseDetails) => {
  const res = await fetch(`/api/expenses/${id}`, {
    method: "PATCH",
    body: JSON.stringify(expenseDetails),
    headers: getHeaders(),
  });
  return await res.json();
};

//delete expense
export async function delExpense(id) {
  const res = await fetch("/api/expenses/" + id, {
    method: "DELETE",
    headers: getHeaders(),
  });
  return await res.json();
}

//signup
export async function signup(data) {
  const res = await fetch(`/api/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await res.json();
}

//login
export async function login(data) {
  const res = await fetch(`/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (res.status > 299) {
    return Promise.reject("incorrect login");
  }

  return await res.json();
}
