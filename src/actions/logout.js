import { redirect } from "react-router-dom";
import { deleteItem } from "../../helpers";
import { toast } from "react-toastify";

export const logoutAction = async () => {
  // Delete Username, Budgets & Expenses
  deleteItem({ key: "userName" });
  deleteItem({ key: "budgets" });
  deleteItem({ key: "expenses" });

  toast.success("You've deleted your account!");

  // Redirect To Homepage
  return redirect("/");
};
