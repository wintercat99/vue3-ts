import { ref } from "vue";
import PageModel from "@/components/pageModel";
import { modelConfig } from "../views/main/product/goods/config/model.config";

type CallbackType = (item?: any) => void;
export function usePageModel(newCb?: CallbackType, editCb?: CallbackType) {
  const pageModelRef = ref<InstanceType<typeof PageModel>>();
  const defaultInfo = ref({});

  const handelNewData = () => {
    defaultInfo.value = {};
    const imgUrlItem = modelConfig.formItems.find(
      (msg) => msg.field === "imgUrl"
    );
    imgUrlItem!.imageUrl = "";
    pageModelRef!.value.dialogVisible = true;
    newCb && newCb();
  };

  const handelEditData = (item: any) => {
    defaultInfo.value = { ...item };
    const imgUrlItem = modelConfig.formItems.find(
      (msg) => msg.field === "imgUrl"
    );
    imgUrlItem!.imageUrl = item.imgUrl;

    pageModelRef!.value.dialogVisible = true;
    editCb && editCb(item);
  };

  return { pageModelRef, defaultInfo, handelNewData, handelEditData };
}
