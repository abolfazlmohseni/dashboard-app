const Modal = ({ children, onClick, state }) => {
  return (
    <div
      className={`flex sm:flex-row h-[70%] ${
        state ? "sm:w-[20%] min-w-[250px]" : "sm:w-[2%]"
      }    sm:h-screen flex-col justify-end items-center sm:fixed sm:top-0 sm:right-0`}
    >
      <div
        onClick={onClick}
        className="w-32 sm:w-1.5 h-1 sm:h-32 mb-2 sm:mb-0 sm:mr-2.5 bg-gray-100 rounded-full cursor-pointer"
      ></div>
      <div
        className={`w-screen ${
          state ? "sm:w-[99%]" : "sm:w-0"
        } h-[90%]  sm:h-screen bg-primary-100 rounded-tl-4xl rounded-bl-4xl transition-all duration-300`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
