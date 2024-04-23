"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { Badge, TabBar } from "antd-mobile";
import {
  AppOutline,
  MessageFill,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons";

const Footer = () => {
  const tabs = [
    {
      key: "/",
      title: "Home",
      icon: <AppOutline />,
      badge: Badge.dot,
    },
    {
      key: "/todo",
      title: "Todo",
      icon: <UnorderedListOutline />,
      badge: "5",
    },
    {
      key: "/message",
      title: "Message",
      icon: (active: boolean) =>
        active ? <MessageFill /> : <MessageOutline />,
      badge: "99+",
    },
    {
      key: "/personalCenter",
      title: "Info",
      icon: <UserOutline />,
    },
  ];
  const pathName = usePathname();
  function changeActive(key: any) {
    router.push(key);
  }
  const router = useRouter();

  return (
    <div className="">
      <TabBar activeKey={pathName} onChange={changeActive}>
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  );
};

export default Footer;
