import MaterialTable from "../components/MaterialTable";
import { useEmployeeContext } from "../../utils/EmployeeProvider";

/**
 * Component for querying employee files
 */
const EmployeeFilesQuery = () => {
  // Define columns for the MaterialTable
  const columns = [
    { title: "Name",field: "name" },
    { title: "Position",field: "position" },
    { title: "Department",field: "department" },
    { title: "Employee Code",field: "employeeCode" },
  ];
  // Get employees from the context using useEmployeeContext hook
  const { employees } = useEmployeeContext();
  // Render MaterialTable with the defined columns and employees data
  return (
    <div>
      <MaterialTable columns={ columns } employees={ employees } admin={ false } />
    </div>
  );
};

export default EmployeeFilesQuery;