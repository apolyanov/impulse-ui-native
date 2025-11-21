import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DresserBoldIcon } from "../bold";
import { DresserDuotoneIcon } from "../duotone";
import { DresserFillIcon } from "../fill";
import { DresserLightIcon } from "../light";
import { DresserRegularIcon } from "../regular";
import { DresserThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
