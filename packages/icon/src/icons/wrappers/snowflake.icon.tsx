import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SnowflakeBoldIcon } from "../bold";
import { SnowflakeDuotoneIcon } from "../duotone";
import { SnowflakeFillIcon } from "../fill";
import { SnowflakeLightIcon } from "../light";
import { SnowflakeRegularIcon } from "../regular";
import { SnowflakeThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
