import { createContext,useContext,useEffect,useState } from "react";

import { toast } from "react-toastify";

//create context
export const EmployeeContext = createContext();


// Initial employee data
let initialEmployees = JSON.parse(localStorage.getItem("employees")) || [
  {
    id: 1,
    name: "John Doe",
    position: "Software Engineer",
    department: "IT",
    employeeCode: "E001",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Product Manager",
    department: "Product",
    employeeCode: "E002",
  },
  {
    id: 3,
    name: "Bob Johnson",
    position: "Data Analyst",
    department: "Data",
    employeeCode: "E003",
  },
  {
    id: 4,
    name: "Alice Williams",
    position: "UX Designer",
    department: "Design",
    employeeCode: "E004",
  },
  {
    id: 5,
    name: "Charlie Brown",
    position: "DevOps Engineer",
    department: "IT",
    employeeCode: "E005",
  },
  {
    id: 6,
    name: "David Davis",
    position: "HR Manager",
    department: "HR",
    employeeCode: "E006",
  },
  {
    id: 7,
    name: "Eva Green",
    position: "Marketing Specialist",
    department: "Marketing",
    employeeCode: "E007",
  },
  {
    id: 8,
    name: "Frank White",
    position: "Sales Representative",
    department: "Sales",
    employeeCode: "E008",
  },
  {
    id: 9,
    name: "Grace Black",
    position: "Customer Support",
    department: "Support",
    employeeCode: "E009",
  },
  {
    id: 10,
    name: "Henry Miller",
    position: "Product Owner",
    department: "Product",
    employeeCode: "E010",
  },
  {
    id: 11,
    name: "Ivy Lee",
    position: "Software Tester",
    department: "QA",
    employeeCode: "E011",
  },
  {
    id: 12,
    name: "Jack Wilson",
    position: "Data Scientist",
    department: "Data",
    employeeCode: "E012",
  },
  {
    id: 13,
    name: "Kim Taylor",
    position: "Business Analyst",
    department: "Business",
    employeeCode: "E013",
  },
  {
    id: 14,
    name: "Luke Martin",
    position: "Network Administrator",
    department: "IT",
    employeeCode: "E014",
  },
  {
    id: 15,
    name: "Mia Thomas",
    position: "SEO Specialist",
    department: "Marketing",
    employeeCode: "E015",
  },
  {
    id: 16,
    name: "Nick Jackson",
    position: "Accountant",
    department: "Finance",
    employeeCode: "E016",
  },
  {
    id: 17,
    name: "Olivia Harris",
    position: "Office Manager",
    department: "Administration",
    employeeCode: "E017",
  },
  {
    id: 18,
    name: "Paul Clark",
    position: "Project Manager",
    department: "Business",
    employeeCode: "E018",
  },
  {
    id: 19,
    name: "Queen Lewis",
    position: "Content Writer",
    department: "Marketing",
    employeeCode: "E019",
  },
  {
    id: 20,
    name: "Robert Walker",
    position: "System Administrator",
    department: "IT",
    employeeCode: "E020",
  },
];

const EmployeeProvider = ({ children }) => {
  const [employees,setEmployees] = useState(initialEmployees);


  // Save employees to localStorage whenever the array is updated
  useEffect(() => {
    localStorage.setItem("employees",JSON.stringify(employees));
  },[employees]);

  const updateEmployee = (id,updatedEmployee) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee) =>
        employee.id === id ? { ...employee,...updatedEmployee } : employee
      )
    );
    toast.success("Product added successfully")
  };

  const deleteEmployee = (id) => {
    setEmployees((prevEmployees) =>
      prevEmployees.filter((employee) => employee.id !== id)
    );
  };
  const AddEmployee = (data) => {
    const length = employees.length
    let NewEmployeeCode = (length < 10 ? "00" : (length > 10 && length) < 100 ? "0" : "")
    // if (length < 10 ) {
    //   NewEmployeeCode = "00"
    // } else if (length > 10 && length < 100) {
    //   NewEmployeeCode="0"
    // }
    setEmployees((prevEmployees) => [...prevEmployees,{ id: length + 1,employeeCode: `E ${NewEmployeeCode + length} `,...data,}])
  }
  return (
    <EmployeeContext.Provider value={ { employees,updateEmployee,deleteEmployee,AddEmployee } }>
      { children }
    </EmployeeContext.Provider>
  );
};

export const useEmployeeContext = () => useContext(EmployeeContext);

export default EmployeeProvider;