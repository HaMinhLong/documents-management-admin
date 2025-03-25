import React, { createContext } from "react";
import { Layout, Typography } from "antd";
import { InitialType, useUrlSearchParams } from "use-url-search-params";

import PageContainer from "@/layouts/PageContainer";
import TableData from "./TableData";

const { Content } = Layout;

interface SubjectContextType {
  parameter?: InitialType;
  // eslint-disable-next-line no-unused-vars
  setParameter?: (nextQuery: InitialType) => void;
}
export const SubjectContext = createContext<SubjectContextType>({});

const SubjectPage = () => {
  const [parameter, setParameter] = useUrlSearchParams({ page: 1, limit: 10 });
  const data = { parameter, setParameter };

  return (
    <SubjectContext.Provider value={data}>
      <PageContainer>
        <Layout style={{ minHeight: "100vh" }}>
          <Content style={{ padding: "16px" }}>
            <Typography.Title level={5} className="uppercase mb-4">
              Quản lý môn học
            </Typography.Title>

            <Layout>
              <TableData />
            </Layout>
          </Content>
        </Layout>
      </PageContainer>
    </SubjectContext.Provider>
  );
};

export default SubjectPage;
