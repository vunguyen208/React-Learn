import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-blue-500 underline decoration-blue-500 font-bold px-3 py-2'
      : 'text-gray-700 hover:text-blue-500 hover:underline px-3 py-2';

  return (
    <nav className='bg-white border-b border-gray-300 shadow-md'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>

        {/* FLEX CONTAINER CHÍNH */}
        <div className='flex h-20 items-center justify-between'>

          {/* LOGO + TÊN */}
          <div className='flex items-center space-x-6'>
            <img className='h-10 w-auto' src={logo} alt='React Jobs' />
            <span className='hidden md:block text-blue-500 text-2xl font-bold ml-2'>
              MCT
            </span>
          </div>

          {/* MENU ITEMS */}
          <div className='flex space-x-4'>
            <NavLink to='/' className={linkClass}>
              Trang chủ
            </NavLink>
            <NavLink to='/about' className={linkClass}>
              Về chúng tôi
            </NavLink>
            <NavLink to='/blog' className={linkClass}>
              Blog
            </NavLink>
            <NavLink to='/tuyen-dung' className={linkClass}>
              Tuyển dụng
            </NavLink>
          </div>

          {/* BUTTON ĐĂNG NHẬP / ĐĂNG KÝ */}
          <div className="hidden md:flex space-x-4">
          
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
              Đăng nhập
            </button>
            <button className="px-4 py-2 text-blue-500 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition">
              Đăng ký
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
