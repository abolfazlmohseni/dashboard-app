import { useState } from "react";

const timeFrimeTxt = ["Today", "7d", "2w", "1m"];
const datas = [
  {
    name: "Users",
    label: "13.2k",
    value: 10,
    direction: "+",
  },
  {
    name: "Sessions",
    label: "18.1k",
    value: 13,
    direction: "-",
  },
  {
    name: "Bounce Rate",
    label: "0.71%",
    value: 6,
    direction: "+",
  },
  {
    name: "Session Duration",
    label: "1m 06s",
    value: 15,
    direction: "-",
  },
];
const TraficSource = () => {
  const [timeChart, setTimeChart] = useState(0);
  return (
    <div className="mt-10">
      <div className="bg-white dark:bg-darkgray-100 rounded-xl px-5 py-7 w-full">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-dark-100 text-lg dark:text-white font-bold">
              Traffic Channel
            </p>
          </div>
          <div className="flex gap-x-7">
            <div className="flex gap-x-2.5 ">
              {timeFrimeTxt.map((item, index) => {
                return (
                  <button
                    className={`${
                      index == timeChart
                        ? "border-2 border-gray-80/20 rounded-sm text-dark-100 dark:text-white dark:border-gray-80/40"
                        : "border-2 border-white text-gray-100 dark:border-darkgray-100 dark:text-dark-text"
                    } px-2.5 py-1`}
                    key={index}
                    onClick={() => setTimeChart(index)}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex gap-x-24">
          {datas.map((data) => {
            return (
              <div className="flex flex-col gap-y-2.5 mt-10">
                <p className=" text-gray-100">{data.name}</p>
                <p className="text-3xl font-bold text-dark-100 dark:text-white">
                  {data.label}
                </p>
                <div className="flex items-center">
                  <svg
                    className={`${
                      data.direction === "+"
                        ? "text-success-100"
                        : "text-error-100 rotate-180"
                    } w-[18px] h-[18px]`}
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 12L9 7L14 12H4Z"
                      fill="currentColor"
                    />
                    <mask
                      id="mask0_518_19235"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x="4"
                      y="7"
                      width="10"
                      height="5"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4 12L9 7L14 12H4Z"
                        fill="currentColor"
                      />
                    </mask>
                    <g mask="url(#mask0_518_19235)"></g>
                  </svg>
                  <p className="text-dark-100 dark:text-white font-bold">
                    {data.value}%
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TraficSource;
