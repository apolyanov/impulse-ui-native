import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BathtubBoldIcon } from "../bold/bathtub-bold.icon";
import { BathtubDuotoneIcon } from "../duotone/bathtub-duotone.icon";
import { BathtubFillIcon } from "../fill/bathtub-fill.icon";
import { BathtubLightIcon } from "../light/bathtub-light.icon";
import { BathtubRegularIcon } from "../regular/bathtub-regular.icon";
import { BathtubThinIcon } from "../thin/bathtub-thin.icon";

export const BathtubIcon = memo(function Bathtub(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BathtubBoldIcon,
      duotone: BathtubDuotoneIcon,
      fill: BathtubFillIcon,
      light: BathtubLightIcon,
      regular: BathtubRegularIcon,
      thin: BathtubThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
