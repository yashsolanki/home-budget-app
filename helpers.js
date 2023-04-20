// Wait For Some Random Amount Of Time
export const wait = () =>
  new Promise((res) => setTimeout(res, Math.random() * 700));

// Generate Random Color
const generateRandomColor = () => {
  const existingBudgetLength = fetchData("budgets")?.length ?? 0;
  return `${existingBudgetLength * 34} 65% 50%`;
};

// Fetch From LocalStorage
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

// Create Budget
export const createBudget = ({ name, amount }) => {
  const newBudget = {
    id: crypto.randomUUID(),
    name,
    createdAt: Date.now(),
    amount: +amount,
    color: generateRandomColor(),
  };
  const existingBudgets = fetchData("budgets") ?? [];
  return localStorage.setItem(
    "budgets",
    JSON.stringify([...existingBudgets, newBudget])
  );
};

// Create Expense
export const createExpense = ({ name, amount, budgetId }) => {
  const newExpense = {
    id: crypto.randomUUID(),
    name,
    createdAt: Date.now(),
    amount: +amount,
    budgetId,
  };
  const existingExpenses = fetchData("expenses") ?? [];
  return localStorage.setItem(
    "expenses",
    JSON.stringify([...existingExpenses, newExpense])
  );
};

// Delete Item
export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key);
};

// Total Spent By Budget
export const calculateSpentByBudget = (budgetId) => {
  const expenses = fetchData("expenses") ?? [];
  const budgetSpent = expenses.reduce((acc, expense) => {
    if (expense.budgetId !== budgetId) return acc;
    return (acc += expense.amount);
  }, 0);
  return budgetSpent;
};

// Format Percentage
export const formatPercentage = (amount) => {
  return amount.toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 0,
  });
};

// Format Currency
export const formatCurrency = (amount) => {
  return amount.toLocaleString(undefined, {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
  });
};

// Format Date
export const formatDateToLocaleString = (epoch) =>
  new Date(epoch).toLocaleDateString();
