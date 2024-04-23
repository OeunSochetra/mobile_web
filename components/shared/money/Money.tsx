import React from "react";

interface MoneyProps {
  mainMoney?: string;
  lastMoney?: string;
  plusMoney?: string;
  parentheses?: string;
  day?: string;
  sizeMain?: "small" | "medium" | "large"; // Define sizes
  sizeLast?: "small" | "medium" | "large"; // Define sizes
}

const Money = ({
  mainMoney,
  plusMoney,
  lastMoney,
  parentheses,
  day,
  sizeMain = "large",
  sizeLast = "small",
}: MoneyProps) => {
  const classMain = {
    small: "text-sm",
    medium: "text-[20px]",
    large: "text-4xl",
  };
  const classLastMoney = {
    small: "text-[12px]",
    medium: "text-base",
    large: "text-xl",
  };

  return (
    <div className="flex flex-col gap-1">
      <span className="flex">
        <p className={`font-[700] ${classMain[sizeMain]}`}>${mainMoney}</p>
        <p className={` text-[#bbbcbe] mt-3 ${classLastMoney[sizeLast]} `}>
          .{lastMoney}
        </p>
      </span>
      <div className="flex items-center gap-1">
        <span className={`text-green-400 flex gap-1 `}>
          <p className={`${classLastMoney[sizeLast]}`}>+{plusMoney}</p>
          <p className={`${classLastMoney[sizeLast]}`}>{parentheses}</p>
        </span>
        <span>
          <p className={`text-[#bbbcbe] ${classLastMoney[sizeLast]} `}>{day}</p>
        </span>
      </div>
    </div>
  );
};

export default Money;

// return (
//   <div className="flex flex-col gap-1">
//     <span className="flex">
//       <p className="text-4xl font-[700]">${mainMoney}</p>
//       <p className="mt-3 text-[#bbbcbe] text-xl">.{lastMoney}</p>
//     </span>
//     <div className="flex items-center gap-1">
//       <span className="text-green-400 flex gap-1">
//         <p className="">+{plusMoney}</p>
//         <p>{parentheses}</p>
//       </span>
//       <span>
//         <p className="text-[#bbbcbe]">{day}D</p>
//       </span>
//     </div>
//   </div>
// );
