type IFormType =
  | "input"
  | "password"
  | "select"
  | "datepicker"
  | "imageUrl"
  | "upload";
export interface IFormItem {
  field: string;
  type: IFormType;
  label: string;
  rules?: any[];
  placeholder?: any;
  options?: any[];
  otherPotions?: any;
  imageUrl?: string;
  fileUrl?: any[];
  isHiddon?: boolean;
}

export interface IForm {
  formItems: IFormItem[];
  labelWidth?: string;
  colLayout?: any;
  itemStyle?: any;
}
