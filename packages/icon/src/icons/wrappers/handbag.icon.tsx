import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HandbagBoldIcon } from "../bold/handbag-bold.icon";
import { HandbagDuotoneIcon } from "../duotone/handbag-duotone.icon";
import { HandbagFillIcon } from "../fill/handbag-fill.icon";
import { HandbagLightIcon } from "../light/handbag-light.icon";
import { HandbagRegularIcon } from "../regular/handbag-regular.icon";
import { HandbagThinIcon } from "../thin/handbag-thin.icon";

export const HandbagIcon = memo(function Handbag(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HandbagBoldIcon,
      duotone: HandbagDuotoneIcon,
      fill: HandbagFillIcon,
      light: HandbagLightIcon,
      regular: HandbagRegularIcon,
      thin: HandbagThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
