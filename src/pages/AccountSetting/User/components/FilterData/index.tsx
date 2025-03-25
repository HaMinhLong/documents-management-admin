import React, { useContext } from "react";
import type { CSSProperties } from "react";
import type { CollapseProps } from "antd";
import { Layout, Select } from "antd";
import CollapseCustom from "../../../../../components/AntdCustom/CollapseCustom";
import { UserContext } from "../..";
import { UserStatusOptions } from "@/constants/master-data";

const { Sider } = Layout;

const FilterData = () => {
  const { parameter, setParameter } = useContext(UserContext);

  // eslint-disable-next-line no-unused-vars
  const getItems: (panelStyle: CSSProperties) => CollapseProps["items"] = (
    panelStyle
  ) => [
    {
      key: "1",
      label: "Trạng thái",
      children: (
        <Select
          placeholder="Trạng thái"
          style={{ width: "100%", marginBottom: "8px" }}
          allowClear
          onChange={(e) => {
            setParameter?.({ ...parameter, status: e });
          }}
          options={UserStatusOptions}
        />
      ),
      style: panelStyle,
    },
  ];

  return (
    <Sider width={375} theme="light" className="p-4">
      <CollapseCustom getItems={getItems} />
    </Sider>
  );
};

export default FilterData;
