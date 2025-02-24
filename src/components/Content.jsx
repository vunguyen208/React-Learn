import backgroundImage from '../assets/images/background.jpg'; // Import ảnh nền

const Content = () => {
  return (
    <div 
      className="w-full bg-cover bg-center flex flex-col items-start justify-center text-left px-80" 
      style={{ 
        backgroundImage: `url(${backgroundImage})`, 
        height: "auto",
        aspectRatio: "16 / 9" // Giữ tỷ lệ ảnh
      }}
    >
      {/* Tiêu đề */}
      <h1 className="text-4xl text-blue-500 font-bold mb-4">
        Math Competitive Training
      </h1>

      {/* Mô tả */}
      <p className="text-lg text-black mb-6 max-w-md">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry
      </p>

      {/* Nút bấm */}
      <button className="bg-blue-500 text-white px-6 py-3 text-lg font-semibold rounded-lg hover:bg-blue-600 transition">
        Bắt đầu ngay
      </button>
    </div>
  );
};

export default Content;
