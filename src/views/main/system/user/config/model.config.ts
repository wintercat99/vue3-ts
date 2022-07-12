import { IForm } from "@/base-ui/form";

export const modelConfig: IForm = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "用户名",
      placeholder: "请输入用户名",
    },
    {
      field: "realname",
      type: "input",
      label: "真实姓名",
      placeholder: "请输入真实姓名",
    },
    {
      field: "password",
      type: "password",
      label: "用户密码",
      placeholder: "请输入用户密码",
      isHiddon: true,
    },
    {
      field: "cellphone",
      type: "input",
      label: "手机号",
      placeholder: "请输入手机号",
    },
    {
      field: "enable",
      type: "select",
      label: "状态",
      placeholder: "请选择状态",
      options: [
        {
          value: true,
          label: "启用",
        },
        {
          value: false,
          label: "禁用",
        },
      ],
    },
    {
      field: "departmentId",
      type: "select",
      label: "部门",
      placeholder: "请选择部门",
      options: [],
    },
    {
      field: "roleId",
      type: "select",
      label: "角色",
      placeholder: "请选择角色",
      options: [],
    },
  ],
  colLayout: {
    span: 24,
  },
  itemStyle: {},
};
