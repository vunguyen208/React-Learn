import tickImage from '../assets/images/vector.png';
import groupIcon from '../assets/images/groupIcon.png';
import { useState } from "react";
import hideItemImage from '../assets/images/hideItem.png';
import showItemImage from '../assets/images/showItem.png';
const ContentLearing = () => {
    const content1=[
        'Hàng trăm tính năng, nội dung hoàn toàn miễn phí content 1',
        'Hệ thống hoạt động trên mọi nền tảng và thiết bị phổ biến',
        'Học bất cứ ở đâu và khi nào bạn muốn',
        'Trả phí cho những gì bạn thực sự cần'
    ]
    const content2=[
        'Hàng trăm tính năng, nội dung hoàn toàn miễn phí content 2',
        'Hệ thống hoạt động trên mọi nền tảng và thiết bị phổ biến',
        'Học bất cứ ở đâu và khi nào bạn muốn',
        'Trả phí cho những gì bạn thực sự cần'
    ]
    const content3=[
        'Hàng trăm tính năng, nội dung hoàn toàn miễn phí content 3',
        'Hệ thống hoạt động trên mọi nền tảng và thiết bị phổ biến',
        'Học bất cứ ở đâu và khi nào bạn muốn',
        'Trả phí cho những gì bạn thực sự cần'
    ]
    const content4=[
        'Hàng trăm tính năng, nội dung hoàn toàn miễn phí content 4',
        'Hệ thống hoạt động trên mọi nền tảng và thiết bị phổ biến',
        'Học bất cứ ở đâu và khi nào bạn muốn',
        'Trả phí cho những gì bạn thực sự cần'
    ]
    const content5=[
        'Hàng trăm tính năng, nội dung hoàn toàn miễn phí content 5',
        'Hệ thống hoạt động trên mọi nền tảng và thiết bị phổ biến',
        'Học bất cứ ở đâu và khi nào bạn muốn',
        'Trả phí cho những gì bạn thực sự cần'
    ]
    const content6=[
        'Hàng trăm tính năng, nội dung hoàn toàn miễn phí content 6',
        'Hệ thống hoạt động trên mọi nền tảng và thiết bị phổ biến',
        'Học bất cứ ở đâu và khi nào bạn muốn',
        'Trả phí cho những gì bạn thực sự cần'
    ]
    const contents=[content1,content2,content3,content4,content5,content6]
    const titles=[
        'Chi phí thấp và dễ tiếp cận',
        'Nội dung đa dạng và thú vị',
        'Tận dụng sức mạnh của trí tuệ nhân tạo để cá nhân hóa trải nghiệm của người dùng',
        'Công cụ đắc lực hỗ trợ, đồng hành cùng phụ huynh và giáo viên',
        'Tính năng tạo đề thi siêu tiện lợi',
        'Sử dụng toàn bộ các tính năng VIP mà không cần trả phí'
    ]
    const [isVisible, setIsVisible] = useState(Array(5).fill(false));
    const toggleVisibility = (index) => {
        setIsVisible(prev => {
          const newState = [...prev];
          newState[index] = !newState[index]; // Đảo trạng thái của phần tử được nhấn
          return newState;
        });
      };
  return (
    <div className="w-full bg-cover px-80">
      {/* Tiêu đề chính */}
      <h1 className="text-4xl text-center text-blue-500 font-bold mb-4">
        Phương pháp học tập
      </h1>

      {/* Container chứa hình ảnh và nội dung */}
      <div className="flex items-center gap-6">
        {/* Hình ảnh */}
        <img className="h-300 w-auto self-start" src={groupIcon} />

        {/* Nội dung bên phải */}
        <div className="flex flex-col space-y-4">
        {[...Array(6)].map((_, index) => (

        <div key={index} className="flex-1">
          <div className="bg-white-100 border border-black-500 p-6 space-y-2 rounded-lg w-100 shadow-md hover:bg-blue-100 hover:border-blue-500 relative ">
            <div className='flex items-start'>
                <img className='h-5 w-5 mr-4' src={tickImage} alt="Tick"/>
                <h1 className="text-xl font-bold text-blue">{titles[index]}</h1>
                <button onClick={() => toggleVisibility(index)}
                className="absolute top-2 right-2">
                    <img className='h-5 w-5' src= {isVisible[index]?hideItemImage:showItemImage} alt="Toggle"/>
                </button>
            </div>
            {isVisible[index] && (
            <ul className="list-disc space-y-2 text-gray-700 px-12">
              {contents[index].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            )}
            
          </div>
        </div>
        ))};
        </div>
        
      </div>
    </div>
  );
};

export default ContentLearing;
