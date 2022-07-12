import { IForm } from "@/base-ui/form";
export const searthFromConfig: IForm = {
  labelWidth: "100px",
  itemStyle: {
    padding: "5px 40px",
  },
  colLayout: {
    span: 8,
  },
  formItems: [
    {
      field: "realname",
      type: "input",
      label: "真实姓名",
      placeholder: "请输入真实姓名",
    },
    {
      field: "name",
      type: "input",
      label: "用户名",
      placeholder: "请输入用户名",
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
      field: "cellphone",
      type: "input",
      label: "手机号",
      placeholder: "请输入手机号",
    },
    {
      field: "createTime",
      type: "datepicker",
      label: "创建时间",
      otherPotions: {
        startPlaceholder: "开始时间",
        endPlaceholder: "结束时间",
        type: "daterange",
      },
    },
    {
      field: "updateAt",
      type: "datepicker",
      label: "更新时间",
      otherPotions: {
        startPlaceholder: "开始时间",
        endPlaceholder: "结束时间",
        type: "daterange",
      },
    },
  ],
};
