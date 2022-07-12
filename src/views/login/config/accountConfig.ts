export const rules = {
  name: [
    {
      required: true,
      message: "用户名是必传内容",
      trigger: "blur",
    },
    {
      pattern: /^[a-zA-Z0-9]{5,10}$/,
      message: "用户名必须是5-10个字母或数字",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "密码是必传内容",
      trigger: "blur",
    },
    {
      pattern: /^[a-zA-Z0-9]{3,}$/,
      message: "密码必须是5-10个字母或数字",
      trigger: "blur",
    },
  ],
  num: [
    {
      required: true,
      message: "手机号是必传内容",
      trigger: "blur",
    },
    {
      pattern: /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/,
      message: "手机号格式不正确",
      trigger: "blur",
    },
  ],
  code: [
    {
      required: true,
      message: "请输入验证码",
      trigger: "blur",
    },
    {
      message: "验证码不正确",
      trigger: "blur",
    },
  ],
};
