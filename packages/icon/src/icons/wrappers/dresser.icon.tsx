import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DresserBoldIcon } from "../bold/dresser-bold.icon";
import { DresserDuotoneIcon } from "../duotone/dresser-duotone.icon";
import { DresserFillIcon } from "../fill/dresser-fill.icon";
import { DresserLightIcon } from "../light/dresser-light.icon";
import { DresserRegularIcon } from "../regular/dresser-regular.icon";
import { DresserThinIcon } from "../thin/dresser-thin.icon";

export const DresserIcon = memo(function Dresser(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DresserBoldIcon,
      duotone: DresserDuotoneIcon,
      fill: DresserFillIcon,
      light: DresserLightIcon,
      regular: DresserRegularIcon,
      thin: DresserThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
