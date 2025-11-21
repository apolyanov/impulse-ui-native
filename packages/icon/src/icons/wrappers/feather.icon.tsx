import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FeatherBoldIcon } from "../bold";
import { FeatherDuotoneIcon } from "../duotone";
import { FeatherFillIcon } from "../fill";
import { FeatherLightIcon } from "../light";
import { FeatherRegularIcon } from "../regular";
import { FeatherThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FeatherIcon = memo(function Feather(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FeatherBoldIcon,
      duotone: FeatherDuotoneIcon,
      fill: FeatherFillIcon,
      light: FeatherLightIcon,
      regular: FeatherRegularIcon,
      thin: FeatherThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
