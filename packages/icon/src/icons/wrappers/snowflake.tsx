import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SnowflakeBold } from "../bold";
import { SnowflakeDuotone } from "../duotone";
import { SnowflakeFill } from "../fill";
import { SnowflakeLight } from "../light";
import { SnowflakeRegular } from "../regular";
import { SnowflakeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Snowflake = memo(function Snowflake(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SnowflakeBold,
      duotone: SnowflakeDuotone,
      fill: SnowflakeFill,
      light: SnowflakeLight,
      regular: SnowflakeRegular,
      thin: SnowflakeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
