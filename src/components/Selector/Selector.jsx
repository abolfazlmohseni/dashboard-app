import { useEffect, useState } from "react";
import { useInfo } from "../../context/Info";

const Selector = ({ item, mt, fontSize, addClass = "", asli = false }) => {
  const [SelectorMageag, setSelectorMageag] = useState({
    activeIndex: 0,
    isOpen: false,
  });
  const { info, setInfo } = useInfo();

  useEffect(() => {
    if (asli === true) {
      return setInfo({
        ...info,
        activePage: SelectorMageag.activeIndex,
      });
    }
  }, [SelectorMageag]);

  return (
    <>
      <div className={`inline-flex  relative ${mt}`}>
        <span
          onClick={() => {
            setSelectorMageag({
              ...SelectorMageag,
              isOpen: true,
            });
          }}
          className={`text-[${fontSize}px] font-bold text-dark-100 dark:text-white ${addClass}`}
        >
          {item[SelectorMageag.activeIndex]}
        </span>
        <div
          className={`bg-white rounded-xl overflow-hidden w-[187px] absolute z-50 top-7 transition-all ${
            SelectorMageag.isOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }`}
        >
          {item.map((item, index) => {
            return (
              <p
                key={index}
                onClick={() => {
                  setSelectorMageag({
                    isOpen: false,
                    activeIndex: index,
                  });
                }}
                className={` py-4 pl-5 ${
                  index === SelectorMageag.activeIndex
                    ? "text-dark-100 font-bold bg-lightgray-100"
                    : "text-gray-100"
                }`}
              >
                {item}
              </p>
            );
          })}
        </div>
      </div>

      <div
        onClick={() => {
          setSelectorMageag({
            ...SelectorMageag,
            isOpen: false,
          });
        }}
        className={`bg-black/20 w-screen h-screen fixed top-0 left-0 transition-all${
          SelectorMageag.isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>
    </>
  );
};

export default Selector;
