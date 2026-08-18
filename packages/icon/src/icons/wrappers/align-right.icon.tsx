import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AlignRightBoldIcon } from "../bold/align-right-bold.icon";
import { AlignRightDuotoneIcon } from "../duotone/align-right-duotone.icon";
import { AlignRightFillIcon } from "../fill/align-right-fill.icon";
import { AlignRightLightIcon } from "../light/align-right-light.icon";
import { AlignRightRegularIcon } from "../regular/align-right-regular.icon";
import { AlignRightThinIcon } from "../thin/align-right-thin.icon";

export const AlignRightIcon = memo(function AlignRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AlignRightBoldIcon,
      duotone: AlignRightDuotoneIcon,
      fill: AlignRightFillIcon,
      light: AlignRightLightIcon,
      regular: AlignRightRegularIcon,
      thin: AlignRightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
