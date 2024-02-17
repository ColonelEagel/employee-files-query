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
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";
import { useEmployeeContext } from "../../utils/EmployeeProvider";

export default function MateTable(props) {
  const { employees,columns,admin } = props;
  const [employee,setEmployees] = useState(employees);
  const [selectedEmployee,setSelectedEmployee] = useState(null);
  const [confirmDialogOpen,setConfirmDialogOpen] = useState(false);
  const navigate = useNavigate();
  const { deleteEmployee,AddEmployee } = useEmployeeContext();

  useEffect(() => {
    setEmployees(employees); // Update the state when employees prop changes
  },[employees]);

  const handleDeleteClick = (event,rowData) => {
    setSelectedEmployee(rowData);
    setConfirmDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    deleteEmployee(selectedEmployee.id,{ deleted: true });
    navigate("/edit/");
    setConfirmDialogOpen(false);
  };

  const handleCancelDelete = () => {
    setSelectedEmployee(null);
    setConfirmDialogOpen(false);
  };

  return (
    <div>
      <MaterialTable
        title="Employee Data"
        data={ employee }
        columns={ columns }
        components={ {
          Container: (props) => <Paper { ...props } elevation={ 0 } />,
          Toolbar: (props) => (
            <Box style={ { backgroundColor: '#f4f4f4',padding: 16 } }>
              <MTableToolbar { ...props } />
            </Box>
          ),
        } }
        options={ {
          headerStyle: {
            backgroundColor: '#01579b',
            color: '#FFF',
          },

        } }
        editable={
          {
            onRowAdd: newData =>
              new Promise((resolve) => {
                setTimeout(() => {
                  /* setData([...data, newData]); */
                  AddEmployee(newData)
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
                tooltip: 'Edit Employee',
                onClick: (event,rowData) => {
                  navigate("/edit/" + rowData.id);
                },
              },
              {
                icon: () => <DeleteIcon />,
                tooltip: 'Delete Employee',
                onClick: handleDeleteClick,
              },
            ]
            : []
        }
      />
      <Dialog open={ confirmDialogOpen } onClose={ handleCancelDelete }>
        <DialogTitle>Delete Employee</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete { selectedEmployee && selectedEmployee.name }?
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
