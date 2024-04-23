import { ConfigProvider, Tabs, TabsProps } from "antd";
import React from "react";
import Bonus from "../pageTabsDeFi/Bonus";
import Cryptocurrency from "../pageTabsDeFi/Cryptocurrency";

const DeFi = () => {
  const items: TabsProps["items"] = [
    {
      key: "one",
      label: (
        <div className="text-14px">
          <p>Bonus</p>
        </div>
      ),
      children: <Bonus />,
    },
    {
      key: "two",
      label: (
        <div>
          <p>One Cryptocurrency</p>
        </div>
      ),
      children: <Cryptocurrency />,
    },
  ];
  return (
    <div>
      <ConfigProvider
        theme={{
          components: {
            Tabs: {
              itemColor: "#bbbbbb",
              itemSelectedColor: "black",
              itemHoverColor: "black",
            },
          },
          // token: { colorPrimary: "#bbbbbb" },
        }}
      >
        <Tabs className="flex" defaultActiveKey="1" items={items} />
      </ConfigProvider>
    </div>
  );
};

export default DeFi;
