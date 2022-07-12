export const contentTableConfig = {
  title: "商品列表",
  propsList: [
    {
      prop: "name",
      label: "商品名称",
      minWidth: "100",
    },
    {
      prop: "oldPrice",
      label: "原价格",
      minWidth: "80",
    },
    {
      prop: "nwePrice",
      label: "现价格",
      minWidth: "80",
    },
    {
      prop: "imgUrl",
      label: "商品图片",
      minWidth: "100",
      slotName: "imgUrl",
    },
    {
      prop: "stetus",
      label: "状态",
      minWidth: "80",
      slotName: "stetus",
    },
    {
      prop: "createAt",
      label: "创建时间",
      minWidth: "100",
      slotName: "createAt",
    },
    {
      prop: "updateAt",
      label: "更新时间",
      minWidth: "100",
      slotName: "updateAt",
    },
    { label: "操作", minWidth: "120", slotName: "handler" },
  ],
  showIndexColumn: true,
  showSelectColumn: true,
  addListName: "新增商品",
};
