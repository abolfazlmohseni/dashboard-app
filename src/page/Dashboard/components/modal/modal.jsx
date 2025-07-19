const Modal = ({ children }) => {
  return (
    //   absolute bottom-0 sm:right-0
    <div className="flex sm:flex-row h-[70%] sm:h-screen flex-col justify-end items-center">
      <div className="w-32 sm:w-1 h-1 sm:h-32 mb-2 sm:mb-0 sm:mr-2.5 bg-gray-100 rounded-full "></div>
      <div className=" w-screen sm:w-[420px] h-[90%]  sm:h-screen bg-white rounded-tl-4xl rounded-bl-4xl ">
        {children}
      </div>
    </div>
  );
};

export default Modal;
