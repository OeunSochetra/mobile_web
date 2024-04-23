import React from "react";
import Money from "../shared/money/Money";
import {
  LoginOutlined,
  LogoutOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import Collections from "../collections/Collections";
import { AddCircleOutline, UpCircleOutline } from "antd-mobile-icons";

const Assets = () => {
  return (
    <div>
      <Money
        sizeMain="large"
        sizeLast="large"
        mainMoney="7,5837"
        lastMoney="989"
        plusMoney="84.98"
        day="6D"
        parentheses="(+34.30%)"
      ></Money>
      {/* icon */}
      <div className="flex items-center justify-center gap-12 mt-5">
        <div className="flex flex-col items-center">
          <span className="bg-[#67b6fc] px-5 py-3 rounded-xl">
            <UpCircleOutline className="text-xl font-[700] text-white items-center " />
          </span>
          <p className="text-[13px]">Send</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="bg-[#67b6fc] px-5 py-3 rounded-xl">
            <UpCircleOutline className="text-xl font-[700] text-white items-center  rotate-180" />
          </span>
          <p className="text-[13px]">Receive</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="bg-[#67b6fc] px-5 py-3 rounded-xl">
            <AddCircleOutline className="text-xl font-[700] text-white items-center" />
          </span>
          <p className="text-[13px]">Buy</p>
        </div>
      </div>
      <div className="mt-5">
        <Collections />
      </div>
    </div>
  );
};

export default Assets;
