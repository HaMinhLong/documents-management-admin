/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Button, Popconfirm } from "antd";
import { TypeUser, useDeleteUserMutation } from "@/api/user";
import { useMessage } from "../../../../../context/MessageContext";
import { UserStatusType } from "@/type/global";
import { getRankTag, getStatusTag } from "@/utils/utils";

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
  const messageApi = useMessage();
  const [deleteUser] = useDeleteUserMutation();

  return [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
      width: 50,
      fixed: "left",
    },
    {
      title: "Tên tài khoản",
      dataIndex: "username",
      key: "username",
      width: 200,
      fixed: "left",
    },
    {
      title: "Họ tên",
      dataIndex: "full_name",
      key: "full_name",
      width: 150,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 150,
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
      width: 150,
    },
    {
      title: "Số dư",
      dataIndex: "balance",
      key: "balance",
      width: 200,
      render: (balance: number) => {
        return (
          <div>
            {balance ? `${Number(balance).toLocaleString("vi-VN")} VNĐ` : ""}
          </div>
        );
      },
    },
    {
      title: "Rank",
      dataIndex: "level",
      key: "level",
      width: 100,
      render: (level: string) => {
        return <>{getRankTag(level)}</>;
      },
    },

    {
      title: "Mã giới thiệu",
      dataIndex: "referral_code",
      key: "referral_code",
      width: 150,
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
      title: "Action",
      render: (record: TypeUser) => {
        return (
          <div className="flex gap-x-2">
            <Button
              color="primary"
              variant="outlined"
              onClick={() => {
                setIsModalVisible(true);
                setEditId(record?.id || 0);
              }}
            >
              Sửa
            </Button>

            <Popconfirm
              title="Xác nhận xoá"
              description="Bạn có chắc chắn muốn xoá bản ghi này không?"
              okText="Xoá"
              cancelText="Huỷ"
              onConfirm={() => {
                deleteUser({ id: record?.id || 0 }).then((res: any) => {
                  if (res?.data?.success) {
                    messageApi.success("Xoá bản ghi thành công");
                    getList();
                  } else {
                    messageApi.error(" Xoá bản ghi không thành công");
                  }
                });
              }}
            >
              <Button color="danger" variant="link">
                Xoá
              </Button>
            </Popconfirm>
          </div>
        );
      },
    },
  ];
};
