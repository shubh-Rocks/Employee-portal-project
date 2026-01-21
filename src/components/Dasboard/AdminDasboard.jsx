import CreateTask from "../other/CreateTask";
import Header from "../other/Header";
import AllTask from "../other/AllTask";

const AdminDasboard = () => {
  return (
    <div className=" h-full w-full bg-black p-10">
      <Header />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDasboard;
