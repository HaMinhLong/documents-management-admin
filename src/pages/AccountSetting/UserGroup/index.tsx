import React from "react";
import { Layout, Typography } from "antd";

import PageContainer from "@/layouts/PageContainer";
import TableData from "./components/TableData";
import UserGroupTutorial from "./components/UserGroupTutorial";

const { Content } = Layout;

const UserGroupPage = () => {
  return (
    <PageContainer>
      <Layout style={{ minHeight: "100vh" }}>
        <Content style={{ padding: "16px" }}>
          <Typography.Title level={5} className="uppercase mb-4">
            Nhóm tài khoản
          </Typography.Title>

          <Layout>
            <TableData />
          </Layout>
        </Content>
      </Layout>

      <UserGroupTutorial />
    </PageContainer>
  );
};

export default UserGroupPage;
