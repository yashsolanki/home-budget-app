import { redirect } from "react-router-dom";
import { deleteItem } from "../../helpers";

export const logoutAction = async () => {
  // Delete User
  deleteItem({ key: "userName" });

  // Redirect To Homepage
  return redirect("/");
};
