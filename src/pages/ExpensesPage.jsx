import { useLoaderData } from "react-router-dom";
import { deleteItem, fetchData } from "../../helpers";
import Table from "../components/Table";
import { toast } from "react-toastify";

// Expenses Loader
export const expensesLoader = async () => {
  const expenses = await fetchData("expenses");
  return { expenses };
};

// Expenses Action
export const expensesAction = async ({ request }) => {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  // Delete Expense
  if (_action === "deleteExpense") {
    try {
      deleteItem({
        key: "expenses",
        id: values.expenseId,
      });
      return toast.success(`Expense deleted!`);
    } catch (error) {
      throw new Error("There was a problem deleting your expense.");
    }
  }
};

const ExpensesPage = () => {
  const { expenses } = useLoaderData();
  return (
    <div className="grid-lg">
      <h1>All Expenses</h1>
      {expenses && expenses.length > 0 ? (
        <div className="grid-md">
          <h2>
            Recent Expenses <small>({expenses.length} total)</small>
          </h2>
          <Table expenses={expenses} />
        </div>
      ) : (
        <p>No Expenses to Show</p>
      )}
    </div>
  );
};

export default ExpensesPage;
