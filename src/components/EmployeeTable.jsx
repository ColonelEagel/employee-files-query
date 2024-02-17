// // components/EmployeeTable.js

// import { useState } from 'react';
// import { employees } from '../../data/employeeData';
// import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';

// const EmployeeTable = () => {
//   const [filter, setFilter] = useState('');

//   const filteredEmployees = employees.filter(employee =>
//     employee.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   const handleFilterChange = (e) => {
//     setFilter(e.target.value);
//   };

//   return (
//     <div>
//       <TextField
//         label="Filter by Name"
//         variant="filled"
//         margin="normal"
//         padding="5px"
//         value={filter}
//         onChange={handleFilterChange}
//       />
//       <TableContainer component={Paper} style={{ marginTop: '20px', padding: '20px' }}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>ID</TableCell>
//               <TableCell>Name</TableCell>
//               <TableCell>Position</TableCell>
//               <TableCell>Department</TableCell>
//               <TableCell>Employee Code</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredEmployees.map((employee) => (
//               <TableRow key={employee.id}>
//                 <TableCell>{employee.id}</TableCell>
//                 <TableCell>{employee.name}</TableCell>
//                 <TableCell>{employee.position}</TableCell>
//                 <TableCell>{employee.department}</TableCell>
//                 <TableCell>{employee.employeeCode}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default EmployeeTable;
