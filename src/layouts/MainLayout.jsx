import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import Content from '../components/Content';
import ContentLearing from '../components/ContentLearning';
import Info from '../components/Info';
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Content />
      <ContentLearing />
      <Info/>
    </>
  );
};
export default MainLayout;
