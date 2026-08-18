import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GearFineBoldIcon } from "../bold/gear-fine-bold.icon";
import { GearFineDuotoneIcon } from "../duotone/gear-fine-duotone.icon";
import { GearFineFillIcon } from "../fill/gear-fine-fill.icon";
import { GearFineLightIcon } from "../light/gear-fine-light.icon";
import { GearFineRegularIcon } from "../regular/gear-fine-regular.icon";
import { GearFineThinIcon } from "../thin/gear-fine-thin.icon";

export const GearFineIcon = memo(function GearFine(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GearFineBoldIcon,
      duotone: GearFineDuotoneIcon,
      fill: GearFineFillIcon,
      light: GearFineLightIcon,
      regular: GearFineRegularIcon,
      thin: GearFineThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
