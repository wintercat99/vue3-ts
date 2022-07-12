import { IForm } from "@/base-ui/form";

export const modelConfig: IForm = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "商品名称",
      placeholder: "请输入商品名称",
    },
    {
      field: "oldPrice",
      type: "input",
      label: "原价格",
      placeholder: "请输入原价格",
    },
    {
      field: "nwePrice",
      type: "input",
      label: "现价格",
      placeholder: "请输入现价格",
    },
    {
      field: "stetus",
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
      field: "imgUrl",
      type: "imageUrl",
      label: "商品图片",
      imageUrl: "",
      isHiddon: true,
    },
    {
      field: "fileUrl",
      type: "upload",
      label: "上传商品图片",
      fileUrl: [],
      isHiddon: true,
    },
  ],
  colLayout: {
    span: 24,
  },
  itemStyle: {},
};
