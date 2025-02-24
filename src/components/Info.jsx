import logo from '../assets/images/logo.png';
import map from '../assets/images/bxs_map.png';
import phone from '../assets/images/bxs_phone.png';
import email from '../assets/images/ic_round-email.png';
import facebook from '../assets/images/facebook-circle.png';
import tiktok from '../assets/images/tiktok-circle.png';
import youtube from '../assets/images/youtube-circle.png';

const Info=()=>{

    return(
    <div className='w-full h-[450px] bg-blue-100 bg-cover '>
        <div className='w-full h-[300] bg-cover p-4'>
        <div className='flex items-start justify-center h-full px-80 mt-16'>
            <div>
                <div className='flex mb-4'>
                    <img className='h-20 w-auto' src={logo}/>
                    <div className='space-y-8'>
                        <div></div>
                        <hi className='hidden md:block text-blue-500 text-5xl font-bold ml-2'>MCT</hi>
                    </div>
                </div>
                <div className='mb-1'>
                     <hi className='px-2 mb-1'>Công ty TNHH Yotech Việt Nam</hi>
                </div>
                <div className='flex mb-1'>
                    <img className='h-5 w-auto px-1' src={map}/>
                    <p>68 Nguyễn Cơ Thạch, Mỹ Đình, Nam Từ Liêm, Hà Nội </p>
                </div>
                <div className='flex mb-1'>
                    <img className='h-5 w-auto px-1' src={phone}/>
                    <p>033 6969 124</p>
                </div>
                <div className='flex'>
                    <img className='h-5 w-auto px-1' src={email}/>
                    <p>yotech@gmail.com</p>
                </div>
            </div>
            
            <div className='px-60'>
                <ul className='space-y-3'>
                    <li>Câu chuyện MCT</li>
                    <li>Câu hỏi thường gặp</li>
                    <li>Hướng dẫn sử dụng</li>
                    <li>Hướng dẫn thanh toán</li>
                    <li>Chính sách bảo mật</li>
                    <li>Gửi phản hồi</li>
                </ul>
            </div>
            <div className='flex space-x-4'>
                <img className='' src={facebook}/>
                <img className='' src={youtube}/>
                <img className='' src={tiktok}/>
            </div>
        </div>
        </div>
        
        <p className='text-center py-16 bg-blue-100 w-full'>Copyright © 2023 www.mct.vn</p>
    </div> 
    )
}
export default Info;