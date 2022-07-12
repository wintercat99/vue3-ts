const DATE_TINE_FORMAT = "YYY-MM-DD HH:mm:ss";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
export function formatUtcString(
  utcString: string,
  format: string = DATE_TINE_FORMAT
) {
  return dayjs.utc(utcString).format(format);
}
