import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { SettingOutlined } from "@ant-design/icons";

import "./index.css";

const { Sider } = Layout;

const HeaderPage = () => {
  const siderStyle: React.CSSProperties = {
    overflow: "auto",
    height: "100vh",
    position: "sticky",
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: "thin",
    scrollbarGutter: "stable",
  };

  const menuItems = [
    {
      key: "user_management",
      label: <Link to="/account-setting/user">Quản lý người dùng</Link>,
    },
    // {
    //   label: "Cài đặt hệ thống",
    //   key: "system_setting",
    //   icon: <SettingOutlined />,
    //   children: [
    //     {
    //       label: <Link to="/system-setting/user-group">Nhóm tài khoản</Link>,
    //       key: "user_group",
    //       authorities: ["user_group_getList"],
    //     },
    //   ],
    // },
  ];

  return (
    <Sider trigger={null} style={siderStyle}>
      <div className="demo-logo-vertical" />
      <Menu
        mode="inline"
        defaultSelectedKeys={["dashboard"]}
        items={menuItems}
      />
    </Sider>
  );
};

export default HeaderPage;
