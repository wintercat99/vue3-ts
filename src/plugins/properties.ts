import { App } from "vue";
import { formatUtcString } from "@/utils/format";
export default function properties(app: App) {
  app.config.globalProperties.$filters = {
    formatTime(value: string) {
      return formatUtcString(value);
    },
  };
}
