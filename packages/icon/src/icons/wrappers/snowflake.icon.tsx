import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SnowflakeBoldIcon } from "../bold/snowflake-bold.icon";
import { SnowflakeDuotoneIcon } from "../duotone/snowflake-duotone.icon";
import { SnowflakeFillIcon } from "../fill/snowflake-fill.icon";
import { SnowflakeLightIcon } from "../light/snowflake-light.icon";
import { SnowflakeRegularIcon } from "../regular/snowflake-regular.icon";
import { SnowflakeThinIcon } from "../thin/snowflake-thin.icon";

export const SnowflakeIcon = memo(function Snowflake(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SnowflakeBoldIcon,
      duotone: SnowflakeDuotoneIcon,
      fill: SnowflakeFillIcon,
      light: SnowflakeLightIcon,
      regular: SnowflakeRegularIcon,
      thin: SnowflakeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
