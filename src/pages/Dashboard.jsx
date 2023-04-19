import { useLoaderData } from "react-router-dom";
import { fetchData } from "../../helpers";
import Intro from "../components/Intro";
import { toast } from "react-toastify";

// Loader
export const dashboardLoader = () => {
  const userName = fetchData("userName");
  return { userName };
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
  const { userName } = useLoaderData();
  return <>{userName ? <p>{userName}</p> : <Intro />}</>;
};

export default Dashboard;
