// import EmployeeTable from "../components/EmployeeTable";
import MateTable from "../components/MaterialTable";
import { useEmployeeContext } from "../../utils/EmployeeProvider";
// import { useContext } from "react";
// import Filters from "../components/Filters ";


const EmployeeFilesQuery = () => {
  const columns = [
    { title: "Name",field: "name" },
    { title: "Position",field: "position" },
    { title: "Department",field: "department" },
    { title: "Employee Code",field: "employeeCode" },
  ];
  const { employees } = useEmployeeContext();
  return (
    <div>
      {/* <EmployeeTable /> */ }

      <MateTable columns={ columns } employees={ employees } admin={ false } />
    </div>
  );
};

export default EmployeeFilesQuery;
