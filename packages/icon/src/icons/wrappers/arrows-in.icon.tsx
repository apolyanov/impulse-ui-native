import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowsInBoldIcon } from "../bold/arrows-in-bold.icon";
import { ArrowsInDuotoneIcon } from "../duotone/arrows-in-duotone.icon";
import { ArrowsInFillIcon } from "../fill/arrows-in-fill.icon";
import { ArrowsInLightIcon } from "../light/arrows-in-light.icon";
import { ArrowsInRegularIcon } from "../regular/arrows-in-regular.icon";
import { ArrowsInThinIcon } from "../thin/arrows-in-thin.icon";

export const ArrowsInIcon = memo(function ArrowsIn(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowsInBoldIcon,
      duotone: ArrowsInDuotoneIcon,
      fill: ArrowsInFillIcon,
      light: ArrowsInLightIcon,
      regular: ArrowsInRegularIcon,
      thin: ArrowsInThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
