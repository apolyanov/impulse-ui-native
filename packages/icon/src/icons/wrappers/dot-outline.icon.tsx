import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DotOutlineBoldIcon } from "../bold/dot-outline-bold.icon";
import { DotOutlineDuotoneIcon } from "../duotone/dot-outline-duotone.icon";
import { DotOutlineFillIcon } from "../fill/dot-outline-fill.icon";
import { DotOutlineLightIcon } from "../light/dot-outline-light.icon";
import { DotOutlineRegularIcon } from "../regular/dot-outline-regular.icon";
import { DotOutlineThinIcon } from "../thin/dot-outline-thin.icon";

export const DotOutlineIcon = memo(function DotOutline(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DotOutlineBoldIcon,
      duotone: DotOutlineDuotoneIcon,
      fill: DotOutlineFillIcon,
      light: DotOutlineLightIcon,
      regular: DotOutlineRegularIcon,
      thin: DotOutlineThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
