/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Button } from "antd";
import {
  TransactionStatusType,
  TransactionTypeType,
  UserStatusType,
} from "@/type/global";
import { TypeTransaction } from "@/api/transaction";
import { TypeUser } from "@/api/user";
import moment from "moment";
import { getStatusTag } from "@/utils/utils";

interface PropsType {
  getList: any;
  setEditId: React.Dispatch<React.SetStateAction<number>>;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useColumnTable = ({
  getList,
  setEditId,
  setIsModalVisible,
}: PropsType) => {
  return [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
      width: 50,
      fixed: "left",
    },
    {
      title: "Người nạp",
      dataIndex: "user",
      key: "user",
      width: 200,
      fixed: "left",
      render: (record: TypeUser) => {
        return (
          <div>
            {record?.full_name || ""} ({record?.email || ""})
          </div>
        );
      },
    },
    {
      title: "Số tiền",
      dataIndex: "amount",
      key: "amount",
      width: 100,
      render: (amount: number) => {
        return (
          <div>
            {amount ? `${Number(amount).toLocaleString("vi-VN")} VNĐ` : ""}
          </div>
        );
      },
    },
    {
      title: "Loại nạp",
      dataIndex: "type",
      key: "type",
      width: 150,
      render: (type: TransactionTypeType) => {
        return <div>VnPay</div>;
      },
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      width: 120,
      render: (status: UserStatusType) => {
        return <div>{getStatusTag(status)}</div>;
      },
    },
    {
      title: "Ngày nạp",
      dataIndex: "created_at",
      key: "created_at",
      width: 150,
      render: (created_at: string) => {
        return <div>{moment(created_at).format("DD-MM-YYYY")}</div>;
      },
    },
  ];
};
