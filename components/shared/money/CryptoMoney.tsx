import React from "react";

interface CryptocurrencyProps {
  CryptocurrencyName?: string | number;
  firstMoney?: string | number;
  lastMOney?: string | number;
}

const CryptoMoney = ({
  CryptocurrencyName,
  firstMoney,
  lastMOney,
}: CryptocurrencyProps) => {
  return (
    <div className="flex flex-col ">
      <p className="text-lg uppercase font-[700]">{CryptocurrencyName}</p>
      <span className="flex gap-1">
        <p className="text-gray-400 text-[12px]">~${firstMoney}</p>
        <p className="text-green-400 text-[12px]">+{lastMOney}%</p>
      </span>
    </div>
  );
};

export default CryptoMoney;
