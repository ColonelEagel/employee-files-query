import React,{ useEffect,useState } from "react";
import { Box,Button,TextField } from "@mui/material";
import { Field,Form,Formik } from "formik";
import { useEmployeeContext } from "../../utils/EmployeeProvider";

/**
 * Component for modifying employee data.
 * @param {Object} employee - The employee object to be modified.
 */
const ModifyForm = ({ employee }) => {
  const { updateEmployee } = useEmployeeContext();

  // Standardized variable names
  const [formValues,setFormValues] = useState({
    name: employee?.name || "",
    position: employee?.position || "",
    department: employee?.department || "",
  });

  useEffect(() => {
    // Removed duplicate code by using formValues state directly
    setFormValues({
      name: employee?.name,
      position: employee?.position,
      department: employee?.department,
    });
  },[employee]);

  /**
   * Handles form submission.
   * @param {Object} values - The form values to be submitted.
   */
  const handleSubmit = (values) => {
    updateEmployee(employee.id,values);
  };

  // Improved readability by grouping styles together
  const styles = {
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '16px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    },
    inputField: {
      marginBottom: '20px',
      width: '100%',
    },
    submitButton: {
      marginTop: '20px',
    },
  };

  return (
    <Box style={ styles.formContainer }>
      <Formik enableReinitialize initialValues={ formValues } onSubmit={ handleSubmit }>
        <Form>
          <Field as={ TextField } label="Name" id="name" name="name" style={ styles.inputField } variant="outlined" />
          <Field as={ TextField } label="Position" id="position" name="position" style={ styles.inputField } variant="outlined" />
          <Field as={ TextField } label="Department" id="department" name="department" style={ styles.inputField } variant="outlined" />
          <Button type="submit" variant="contained" color="primary" style={ styles.submitButton }>
            Update Employee
          </Button>
        </Form>
      </Formik>
    </Box>
  );
};

export default ModifyForm;