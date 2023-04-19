import { useLoaderData } from "react-router-dom";
import { fetchData } from "../../helpers";
import Intro from "../components/Intro";
import { toast } from "react-toastify";
import AddBudgetForm from "../components/AddBudgetForm";

// Loader
export const dashboardLoader = () => {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  return { userName, budgets };
};

// Action
export const dashboardAction = async ({ request }) => {
  const data = await request.formData();
  try {
    const formData = Object.fromEntries(data);
    localStorage.setItem("userName", JSON.stringify(formData.userName));
    return toast.success(`Welcome, ${formData.userName}`);
  } catch (error) {
    throw new Error("There was a problem creating your account");
  }
};

const Dashboard = () => {
  const { userName, budgets } = useLoaderData();
  return (
    <>
      {userName ? (
        <div className="dashboard">
          <h1>
            Welcome back, <span className="accent">{userName}</span>
          </h1>
          <div className="grid-sm">
            {/* {budgets ? () : ()} */}
            <div className="grid-lg">
              <div className="flex-lg">
                <AddBudgetForm />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
};

export default Dashboard;
