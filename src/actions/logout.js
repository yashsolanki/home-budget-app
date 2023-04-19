import { redirect } from "react-router-dom";
import { deleteItem } from "../../helpers";
import { toast } from "react-toastify";

export const logoutAction = async () => {
  // Delete User
  deleteItem({ key: "userName" });

  toast.success("You've deleted your account!");

  // Redirect To Homepage
  return redirect("/");
};
