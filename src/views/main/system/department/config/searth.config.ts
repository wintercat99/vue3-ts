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
      field: "name",
      type: "input",
      label: "部门名称",
      placeholder: "请输入部门名称",
    },
    {
      field: "realname",
      type: "input",
      label: "部门领导",
      placeholder: "请输入部门领导",
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
  ],
};
