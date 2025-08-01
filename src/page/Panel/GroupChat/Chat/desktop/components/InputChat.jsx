const InputChat = () => {
  return (
    <div className="w-full py-2.5 pl-2.5 pr-5 mb-10 bg-white dark:bg-darkgray-100 rounded-xl flex items-center">
      <label
        htmlFor="addFile"
        className="w-[38px] h-[38px] shrink-0 bg-primary-100 rounded-xl flex items-center justify-center cursor-pointer"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 10H10V16H8V10H2V8H8V2H10V8H16V10Z"
            fill="white"
          />
          <mask
            id="mask0_550_29767"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="2"
            y="2"
            width="14"
            height="14"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 10H10V16H8V10H2V8H8V2H10V8H16V10Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_550_29767)"></g>
        </svg>
      </label>
      <input type="file" id="addFile" className="hidden" />
      <input
        type="text"
        placeholder="Enter your message…"
        className="w-full h-full pl-3.5 py-2.5 mx-3 outline-0 text-gray-100 "
      />
      <div>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.2 9C16.2 5.02355 12.9764 1.8 9 1.8C5.02355 1.8 1.8 5.02355 1.8 9C1.8 12.9764 5.02355 16.2 9 16.2C10.9096 16.2 12.7409 15.4414 14.0912 14.0912C15.4414 12.7409 16.2 10.9096 16.2 9ZM18 9C18 13.9706 13.9706 18 9 18C6.61305 18 4.32387 17.0518 2.63604 15.364C0.948212 13.6761 0 11.3869 0 9C0 6.61305 0.948212 4.32387 2.63604 2.63604C4.32387 0.948212 6.61305 0 9 0C11.3869 0 13.6761 0.948212 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9ZM7.2 6.75C7.2 7.47 6.57 8.1 5.85 8.1C5.13 8.1 4.5 7.47 4.5 6.75C4.5 6.03 5.13 5.4 5.85 5.4C6.57 5.4 7.2 6.03 7.2 6.75ZM13.5 6.75C13.5 7.47 12.87 8.1 12.15 8.1C11.43 8.1 10.8 7.47 10.8 6.75C10.8 6.03 11.43 5.4 12.15 5.4C12.87 5.4 13.5 6.03 13.5 6.75ZM9 13.707C7.425 13.707 6.039 13.05 5.229 12.078L6.507 10.8C6.912 11.448 7.875 11.907 9 11.907C10.125 11.907 11.088 11.448 11.493 10.8L12.771 12.078C11.961 13.05 10.575 13.707 9 13.707Z"
            fill="#7F85A2"
          />
          <mask
            id="mask0_550_29751"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="18"
            height="18"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.2 9C16.2 5.02355 12.9764 1.8 9 1.8C5.02355 1.8 1.8 5.02355 1.8 9C1.8 12.9764 5.02355 16.2 9 16.2C10.9096 16.2 12.7409 15.4414 14.0912 14.0912C15.4414 12.7409 16.2 10.9096 16.2 9ZM18 9C18 13.9706 13.9706 18 9 18C6.61305 18 4.32387 17.0518 2.63604 15.364C0.948212 13.6761 0 11.3869 0 9C0 6.61305 0.948212 4.32387 2.63604 2.63604C4.32387 0.948212 6.61305 0 9 0C11.3869 0 13.6761 0.948212 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9ZM7.2 6.75C7.2 7.47 6.57 8.1 5.85 8.1C5.13 8.1 4.5 7.47 4.5 6.75C4.5 6.03 5.13 5.4 5.85 5.4C6.57 5.4 7.2 6.03 7.2 6.75ZM13.5 6.75C13.5 7.47 12.87 8.1 12.15 8.1C11.43 8.1 10.8 7.47 10.8 6.75C10.8 6.03 11.43 5.4 12.15 5.4C12.87 5.4 13.5 6.03 13.5 6.75ZM9 13.707C7.425 13.707 6.039 13.05 5.229 12.078L6.507 10.8C6.912 11.448 7.875 11.907 9 11.907C10.125 11.907 11.088 11.448 11.493 10.8L12.771 12.078C11.961 13.05 10.575 13.707 9 13.707Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_550_29751)"></g>
        </svg>
      </div>
    </div>
  );
};

export default InputChat;
