import Header from "../other/Header";
import TaskNo from "../other/TaskNo";
import TaskList from "../TaskList/TaskList";

const EmployeeDasboard = () => {
  return (
    <div className="px-5 bg-black h-screen py-8">
      <Header />
      <TaskNo />
      <TaskList />
    </div>
  );
};

export default EmployeeDasboard;
