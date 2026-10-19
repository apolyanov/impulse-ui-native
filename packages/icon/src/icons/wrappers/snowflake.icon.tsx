import { createIcon } from "../../hocs/create-icon.hoc";
import { SnowflakeBoldIcon } from "../bold/snowflake-bold.icon";
import { SnowflakeDuotoneIcon } from "../duotone/snowflake-duotone.icon";
import { SnowflakeFillIcon } from "../fill/snowflake-fill.icon";
import { SnowflakeLightIcon } from "../light/snowflake-light.icon";
import { SnowflakeRegularIcon } from "../regular/snowflake-regular.icon";
import { SnowflakeThinIcon } from "../thin/snowflake-thin.icon";

export const SnowflakeIcon = createIcon("Snowflake", {
  bold: SnowflakeBoldIcon,
  duotone: SnowflakeDuotoneIcon,
  fill: SnowflakeFillIcon,
  light: SnowflakeLightIcon,
  regular: SnowflakeRegularIcon,
  thin: SnowflakeThinIcon,
});
