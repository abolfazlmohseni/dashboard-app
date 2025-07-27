const info = {
  name: "abolfazl",
  lastName: "mohseni",
  token: "login",
  profile: "./src/assets/images/abolfazlmohseni.jpg",
};
const icons = [
  `      <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.84204 13.6315H12.1578V12.1579H1.84204V13.6315ZM12.1578 5.52628H9.21046V1.10522H4.78941V5.52628H1.84204L6.99994 10.6842L12.1578 5.52628Z"
                      fill="currentColor"
                    />
                    <mask
                      id="mask0_546_27374"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x="1"
                      y="1"
                      width="12"
                      height="13"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.84204 13.6315H12.1578V12.1579H1.84204V13.6315ZM12.1578 5.52628H9.21046V1.10522H4.78941V5.52628H1.84204L6.99994 10.6842L12.1578 5.52628Z"
                        fill="currentColor"
                      />
                    </mask>
                    <g mask="url(#mask0_546_27374)"></g>
                  </svg>`,
  `  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.6316 6.99994L8.47367 1.84204V4.78941C3.31578 5.52625 1.10525 9.21046 0.368408 12.8947C2.21051 10.3157 4.78946 9.13678 8.47367 9.13678V12.1578L13.6316 6.99994Z"
                      fill="currentColor"
                    />
                    <mask
                      id="mask0_546_27369"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="1"
                      width="14"
                      height="12"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.6316 6.99994L8.47367 1.84204V4.78941C3.31578 5.52625 1.10525 9.21046 0.368408 12.8947C2.21051 10.3157 4.78946 9.13678 8.47367 9.13678V12.1578L13.6316 6.99994Z"
                        fill="currentColor"
                      />
                    </mask>
                    <g mask="url(#mask0_546_27369)"></g>
                  </svg>`,
  ` <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.99993 9.94733C7.81382 9.94733 8.47361 10.6071 8.47361 11.421C8.47361 12.2349 7.81382 12.8947 6.99993 12.8947C6.18604 12.8947 5.52625 12.2349 5.52625 11.421C5.52625 10.6071 6.18604 9.94733 6.99993 9.94733ZM6.99993 5.52628C7.81382 5.52628 8.47361 6.18607 8.47361 6.99996C8.47361 7.81386 7.81382 8.47365 6.99993 8.47365C6.18604 8.47365 5.52625 7.81386 5.52625 6.99996C5.52625 6.18607 6.18604 5.52628 6.99993 5.52628ZM6.99998 1.10522C7.81387 1.10522 8.47366 1.76502 8.47366 2.57891C8.47366 3.3928 7.81387 4.05259 6.99998 4.05259C6.18609 4.05259 5.5263 3.3928 5.5263 2.57891C5.5263 1.76502 6.18609 1.10522 6.99998 1.10522Z"
                      fill="currentColor"
                    />
                    <mask
                      id="mask0_546_27358"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x="5"
                      y="1"
                      width="4"
                      height="12"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.99993 9.94733C7.81382 9.94733 8.47361 10.6071 8.47361 11.421C8.47361 12.2349 7.81382 12.8947 6.99993 12.8947C6.18604 12.8947 5.52625 12.2349 5.52625 11.421C5.52625 10.6071 6.18604 9.94733 6.99993 9.94733ZM6.99993 5.52628C7.81382 5.52628 8.47361 6.18607 8.47361 6.99996C8.47361 7.81386 7.81382 8.47365 6.99993 8.47365C6.18604 8.47365 5.52625 7.81386 5.52625 6.99996C5.52625 6.18607 6.18604 5.52628 6.99993 5.52628ZM6.99998 1.10522C7.81387 1.10522 8.47366 1.76502 8.47366 2.57891C8.47366 3.3928 7.81387 4.05259 6.99998 4.05259C6.18609 4.05259 5.5263 3.3928 5.5263 2.57891C5.5263 1.76502 6.18609 1.10522 6.99998 1.10522Z"
                        fill="currentColor"
                      />
                    </mask>
                    <g mask="url(#mask0_546_27358)"></g>
                  </svg>`,
];
const Chat = () => {
  return (
    <div className="mt-10 h-[80%]">
      <div className="flex items-center justify-between pb-5 border-b border-gray-100/20">
        <p
          className="font-bold text-dark-100 text-3xl
        "
        >
          text test
        </p>
        <div className="flex gap-x-10">
          <span>
            <svg
              className="w-7 h-7 text-gray-100"
              viewBox="0 0 30 28"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14 20.8289L8.15112 24.36L9.69112 17.7022L4.52668 13.2222L11.34 12.6467L14 6.36222L16.66 12.6467L23.4733 13.2222L18.3089 17.7022L19.8489 24.36L14 20.8289ZM29.5556 11.2622L18.3711 10.3133L14 0L9.6289 10.3133L-1.55554 11.2622L6.92224 18.62L4.38668 29.5556L14 23.7533L23.6133 29.5556L21.0622 18.62L29.5556 11.2622Z"
                fill="currentColor"
              />
              <mask
                id="mask0_0_6736"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="-2"
                y="0"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14 20.8289L8.15112 24.36L9.69112 17.7022L4.52668 13.2222L11.34 12.6467L14 6.36222L16.66 12.6467L23.4733 13.2222L18.3089 17.7022L19.8489 24.36L14 20.8289ZM29.5556 11.2622L18.3711 10.3133L14 0L9.6289 10.3133L-1.55554 11.2622L6.92224 18.62L4.38668 29.5556L14 23.7533L23.6133 29.5556L21.0622 18.62L29.5556 11.2622Z"
                  fill="currentColor"
                />
              </mask>
              <g mask="url(#mask0_0_6736)"></g>
            </svg>
          </span>
          <span>
            <svg
              className="w-7 h-7 text-gray-100"
              viewBox="0 0 28 28"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14 20.2222C15.7182 20.2222 17.1111 21.6151 17.1111 23.3333C17.1111 25.0515 15.7182 26.4444 14 26.4444C12.2818 26.4444 10.8889 25.0515 10.8889 23.3333C10.8889 21.6151 12.2818 20.2222 14 20.2222ZM14 10.8889C15.7182 10.8889 17.1111 12.2818 17.1111 14C17.1111 15.7182 15.7182 17.1111 14 17.1111C12.2818 17.1111 10.8889 15.7182 10.8889 14C10.8889 12.2818 12.2818 10.8889 14 10.8889ZM14 1.55554C15.7182 1.55554 17.1111 2.94843 17.1111 4.66665C17.1111 6.38487 15.7182 7.77776 14 7.77776C12.2818 7.77776 10.8889 6.38487 10.8889 4.66665C10.8889 2.94843 12.2818 1.55554 14 1.55554Z"
                fill="currentColor"
              />
              <mask
                id="mask0_0_6737"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="10"
                y="1"
                width="8"
                height="26"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14 20.2222C15.7182 20.2222 17.1111 21.6151 17.1111 23.3333C17.1111 25.0515 15.7182 26.4444 14 26.4444C12.2818 26.4444 10.8889 25.0515 10.8889 23.3333C10.8889 21.6151 12.2818 20.2222 14 20.2222ZM14 10.8889C15.7182 10.8889 17.1111 12.2818 17.1111 14C17.1111 15.7182 15.7182 17.1111 14 17.1111C12.2818 17.1111 10.8889 15.7182 10.8889 14C10.8889 12.2818 12.2818 10.8889 14 10.8889ZM14 1.55554C15.7182 1.55554 17.1111 2.94843 17.1111 4.66665C17.1111 6.38487 15.7182 7.77776 14 7.77776C12.2818 7.77776 10.8889 6.38487 10.8889 4.66665C10.8889 2.94843 12.2818 1.55554 14 1.55554Z"
                  fill="currentColor"
                />
              </mask>
              <g mask="url(#mask0_0_6737)"></g>
            </svg>
          </span>
        </div>
      </div>
      <div className="h-full flex flex-col justify-between mt-10">
        <div className="flex flex-col gap-y-10">
          {/* normal text */}
          <div className="flex items-start ">
            <div className="shrink-0 w-9 h-9 rounded-xl overflow-hidden">
              <img src={info.profile} alt={info.name} />
            </div>
            <div className="ml-4">
              <div className="flex items-center">
                <p className="font-bold text-dark-100 text-sm">
                  Leticia Saavedra
                </p>
                <p className="ml-2.5 text-gray-100 text-xs">4min</p>
              </div>
              <p className="pr-5 text-justify text-gray-100 mt-2.5">
                Happy Friday Team! Remember to share your reports to review
                before the end of the weekend and feel free to share your
                thoughts about it
              </p>
            </div>
          </div>
          {/* file */}
          <div className="flex items-start w-full">
            <div className="shrink-0 w-9 h-9 rounded-xl overflow-hidden ">
              <img src={info.profile} alt={info.name} />
            </div>
            <div className="ml-4">
              <div className="flex items-center">
                <p className="font-bold text-dark-100 text-sm">
                  Leticia Saavedra
                </p>
                <p className="ml-2.5 text-gray-100 text-xs">4min</p>
              </div>
              <div className="flex items-center justify-between bg-white p-4 rounded-xl gap-x-14 mt-2.5">
                <div className="flex">
                  <img src="./src/assets/images/Excel.png" alt="icon file" />
                  <div className="ml-4">
                    <p className="text-dark-100 text-sm font-bold">
                      Analytics_report
                    </p>
                    <p className="text-gray-100 text-sm">
                      12mb Spreadsheet file
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-x-2.5">
                  {icons.map((icon) => {
                    return (
                      <div
                        className="w-7 h-7 bg-gray-80/20 text-gray-100 rounded-lg flex items-center justify-center"
                        dangerouslySetInnerHTML={{ __html: icon }}
                      ></div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full h-6 relative flex rounded-md overflow-hidden mb-4">
            <div className="bg-success-100 w-[51%] h-full rounded-md"></div>
            <div className="bg-success-80/20 w-[49%] h-full"></div>
            <div className="absolute left-3.5 right-3.5 text-white flex items-center justify-between ">
              <p>analytics_report_xls</p>
              <p>51%</p>
              <svg
                className="cursor-pointer "
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.82843 9.77129L6 6.94286L3.17157 9.77129L2.22876 8.82848L5.05719 6.00005L2.22876 3.17163L3.17157 2.22882L6 5.05724L8.82843 2.22882L9.77124 3.17163L6.94281 6.00005L9.77124 8.82848L8.82843 9.77129Z"
                  fill="#1E1F20"
                />
                <mask
                  id="mask0_0_6748"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x="2"
                  y="2"
                  width="8"
                  height="8"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.82843 9.77129L6 6.94286L3.17157 9.77129L2.22876 8.82848L5.05719 6.00005L2.22876 3.17163L3.17157 2.22882L6 5.05724L8.82843 2.22882L9.77124 3.17163L6.94281 6.00005L9.77124 8.82848L8.82843 9.77129Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_0_6748)"></g>
              </svg>
            </div>
          </div>
          <div className="w-full py-2.5 pl-2.5 pr-5 mb-10 bg-white rounded-xl flex items-center">
            <div className="w-[38px] h-[38px] shrink-0 bg-primary-100 rounded-xl flex items-center justify-center">
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
            </div>
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
        </div>
      </div>
    </div>
  );
};

export default Chat;
