import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FeatherBoldIcon } from "../bold/feather-bold.icon";
import { FeatherDuotoneIcon } from "../duotone/feather-duotone.icon";
import { FeatherFillIcon } from "../fill/feather-fill.icon";
import { FeatherLightIcon } from "../light/feather-light.icon";
import { FeatherRegularIcon } from "../regular/feather-regular.icon";
import { FeatherThinIcon } from "../thin/feather-thin.icon";

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
