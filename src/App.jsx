import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import EmployeeProvider from '../utils/EmployeeProvider';
import RootLayout from './layout/RootLayout';
import EmployeeFilesQuery from './pages/EmployeeFilesQuery';
import EditEmployee from './pages/EditEmployee';
import NotFound from './pages/NotFound';
import Footer from './components/UI/Footer';

import "./App.css"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <RootLayout /> }>
      <Route index element={ <EmployeeFilesQuery /> } />
      <Route path="edit" element={ <EditEmployee /> }>
        <Route path=":id" element={ <EditEmployee /> } />
        <Route />
      </Route>
      <Route path="*" element={ <NotFound /> } />
    </Route>
  )
);

function App() {
  return (
    <EmployeeProvider>
      <RouterProvider router={ router } />
      <Footer />
      <ToastContainer position="bottom-right" theme="dark" autoClose={ 3000 } />
    </EmployeeProvider>
  );
}

export default App;
