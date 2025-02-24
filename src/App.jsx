import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
//import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
//import JobPage, { jobLoader } from './pages/JobPage';
//import AddJobPage from './pages/AddJobPage';
//import EditJobPage from './pages/EditJobPage';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
export default App;
