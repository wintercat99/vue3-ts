import { IForm } from "@/base-ui/form";

export const modelConfig: IForm = {
  formItems: [
    {
      field: "departmentId",
      type: "select",
      label: "部门名称",
      placeholder: "请选择部门名称",
      options: [],
    },
    {
      field: "realname",
      type: "input",
      label: "部门领导",
      placeholder: "请输入部门领导",
    },
    {
      field: "nextname",
      type: "input",
      label: "上级部门",
      placeholder: "请输入上级部门",
    },
    {
      field: "roleId",
      type: "select",
      label: "角色",
      placeholder: "请选择角色",
      options: [],
    },
    {
      field: "password",
      type: "password",
      label: "用户密码",
      placeholder: "请输入用户密码",
      isHiddon: true,
    },
  ],
  colLayout: {
    span: 24,
  },
  itemStyle: {},
};
