import { ref } from "vue";
import PageContent from "@/components/pageContnet";

export function userPageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>();
  const handleResetClick = () => {
    pageContentRef.value?.getPageData();
  };
  const handleQueryClick = (queryInfo: any) => {
    pageContentRef.value?.getPageData(queryInfo);
  };
  return { pageContentRef, handleResetClick, handleQueryClick };
}
