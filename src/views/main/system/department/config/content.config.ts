export const contentTableConfig = {
  title: "用户列表",
  propsList: [
    {
      prop: "name",
      label: "部门名称",
      minWidth: "100",
    },
    {
      prop: "realname",
      label: "部门领导",
      minWidth: "100",
    },
    {
      prop: "nextname",
      label: "上级部门",
      minWidth: "100",
    },
    {
      prop: "createAt",
      label: "创建时间",
      minWidth: "100",
    },
    {
      prop: "updateAt",
      label: "更新时间",
      minWidth: "100",
    },
    { label: "操作", minWidth: "120", slotName: "handler" },
  ],
  showIndexColumn: true,
  showSelectColumn: true,
  addListName: "新增用户",
};
