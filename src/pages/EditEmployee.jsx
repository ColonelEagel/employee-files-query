import { useEffect,useMemo,useState } from 'react';
import { Link,NavLink,useParams } from 'react-router-dom';
import {
  Button,
  Container,
  Modal,
  Typography,

} from '@mui/material';
import MateTable from '../components/MaterialTable';
import ModifyForm from '../components/ModifyForm';
import { useEmployeeContext } from '../../utils/EmployeeProvider';

const EditEmployee = () => {
  const { id } = useParams();
  const [openModal,setOpenModal] = useState(false);

  const { employees } = useEmployeeContext();
  const [employee,setEmployee] = useState({})
  const columns = [
    { title: 'Name',field: 'name' },
    { title: 'Position',field: 'position' },
    { title: 'Department',field: 'department' },
    { title: 'Employee Code',field: 'employeeCode' },
  ];
  useEffect(() => {

    if (id) {
      setEmployee(employees.filter((em) => em.id == id))


    }
  },[employees,id])


  if (employee.length === 0) {
    //return a message says no employee found
    return (


      <Typography variant="h4" color="red"
        sx={ {
          mt: 2,
          position: 'absolute',
          top: "50%",
          right: "50%",
          transform: 'translate(50%, -50%)',
          width: '100%',
          textAlign: 'center',
        } }>error 404 No Employee Found back to  <Button color="primary" sx={ { fontSize: "2rem",textDecoration: "underline" } } component={ NavLink } to="/">
          Home
        </Button></Typography>


    );
  }





  const handleEditClick = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Container
      component="main"
      maxWidth="sm"
      sx={ {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

      } }
    >
      <Typography variant="h3" color="primary" mb={ 3 }>
        Edit Employee { id }
      </Typography>
      <Button
        onClick={ handleEditClick }
        variant="contained"
        color="primary"
        mb={ 2 }
      >
        Open Edit Modal
      </Button>
      <Modal open={ openModal } onClose={ handleCloseModal } sx={ { position: 'absolute',top: (employee.length < 0 ? "10%" : "0"),paddingBottom: "1px" } }>
        <Container
          sx={ {
            p: 3,
            pb: 0,
            maxWidth: 600,
            bgcolor: 'background.paper',
            borderRadius: 2,
          } }
        >
          <Typography variant="h4" color="primary" mb={ 2 }>
            Edit Employee
          </Typography>
          <MateTable
            employees={ employees }
            columns={ columns }
            admin={ true }
            mt={ 2 }
          />
          { employee.length > 0 && <ModifyForm employee={ employee[0] } /> }
          <Button
            onClick={ handleCloseModal }
            variant="contained"
            color="secondary"
            sx={ {
              mt: 2,
              position: 'relative',
              bottom: "-30px",
              right: "20px",
              zIndex: -1
            } }
          >
            Close
          </Button>
        </Container>
      </Modal>
    </Container>
  );
};

export default EditEmployee;
