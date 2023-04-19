import { useLoaderData } from "react-router-dom";
import { fetchData } from "../../helpers";

// Loader
export const dashboardLoader = () => {
  const userName = fetchData("userName");
  return { userName };
};

const Dashboard = () => {
  const { userName } = useLoaderData();
  return (
    <div>
      <h1>{userName}</h1>
      Dashboard
    </div>
  );
};

export default Dashboard;
