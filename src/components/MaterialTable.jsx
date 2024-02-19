import MaterialTable,{ MTableToolbar } from "@material-table/core";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Button,
} from "@mui/material";
import { useEffect,useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { useEmployeeContext } from "../../utils/EmployeeProvider";

/**
 * Represents a table of employees.
 * @param {Object} props - The props for the EmployeeTable component.
 * @param {Array} props.employees - The array of employee data.
 * @param {Array} props.columns - The array of column definitions for the table.
 * @param {boolean} props.admin - A flag indicating if the user is an admin.
 */
export default function EmployeeTable({ employees,columns,admin }) {
  const [employeeData,setEmployeeData] = useState(employees);
  const [selectedEmployee,setSelectedEmployee] = useState(null);
  const [isDeleteDialogOpen,setDeleteDialogOpen] = useState(false);
  const navigate = useNavigate();
  const { deleteEmployee,addEmployee } = useEmployeeContext();

  // Update the employee data when the 'employees' prop changes
  useEffect(() => {
    setEmployeeData(employees);
  },[employees]);

  // Handle the click event for deleting an employee
  const handleDeleteClick = (event,rowData) => {
    setSelectedEmployee(rowData);
    setDeleteDialogOpen(true);
  };

  // Handle the confirm delete action
  const handleConfirmDelete = () => {
    deleteEmployee(selectedEmployee.id,{ deleted: true });
    navigate("/edit/");
    setDeleteDialogOpen(false);
  };

  // Handle the cancel delete action
  const handleCancelDelete = () => {
    setSelectedEmployee(null);
    setDeleteDialogOpen(false);
  };

  return (
    <div>
      <MaterialTable
        title="Employee Data"
        data={ employeeData }
        columns={ columns }
        components={ {
          Container: (props) => <Paper { ...props } elevation={ 0 } />,
          Toolbar: (props) => (
            <Box style={ { backgroundColor: "#f4f4f4",padding: 16 } }>
              <MTableToolbar { ...props } />
            </Box>
          ),
        } }
        options={ {
          headerStyle: {
            backgroundColor: "#01579b",
            color: "#FFF",
          },
        } }
        editable={
          admin
          && {
            onRowAdd: (newData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  addEmployee(newData);
                  resolve();
                },1000);
              }),
          }

        }
        actions={
          admin
            ? [
              {
                icon: () => <EditIcon />,
                tooltip: "Edit Employee",
                onClick: (event,rowData) => {
                  navigate("/edit/" + rowData.id);
                },
              },
              {
                icon: () => <DeleteIcon />,
                tooltip: "Delete Employee",
                onClick: handleDeleteClick,
              },
            ]
            : []
        }
      />
      <Dialog open={ isDeleteDialogOpen } onClose={ handleCancelDelete }>
        <DialogTitle>Delete Employee</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete{ " " }
            { selectedEmployee && selectedEmployee.name }?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={ handleCancelDelete } color="primary">
            Cancel
          </Button>
          <Button onClick={ handleConfirmDelete } color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
