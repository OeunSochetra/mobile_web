"use client";
import { Tabs, TabsProps, ConfigProvider } from "antd";
import Assets from "@/components/pageTabs/Assets";
import NFTs from "@/components/pageTabs/NFTs";
import DeFi from "@/components/pageTabs/DeFi";
import { AppstoreOutline, BellOutline } from "antd-mobile-icons";

const Home = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <div>
          <span className=" flex gap-1">
            <p className="text-lg  font-[700]">Assets</p>
            <p className="text-[10px]">36</p>
          </span>
        </div>
      ),
      children: <Assets />,
    },
    {
      key: "2",
      label: (
        <div>
          <span className="flex gap-1">
            <p className="text-lg  font-[700]">NFTs</p>
            <p className="text-[10px]">12</p>
          </span>
        </div>
      ),
      children: <NFTs />,
    },
    {
      key: "3",
      label: (
        <div>
          <span className=" flex gap-1">
            <p className="text-lg  font-[700]">DeFi</p>
            <p className="text-[10px]">24</p>
          </span>
        </div>
      ),
      children: <DeFi />,
    },
  ];

  return (
    <div className=" text-black flex flex-col gap-4 p-5">
      <div className="text-black flex items-center justify-between mt-5">
        <p className=" font-[600] text-3xl">My wallet</p>
        <span className="text-2xl flex gap-3">
          <BellOutline />
          <AppstoreOutline />
        </span>
      </div>
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

export default Home;
