import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PaperPlaneRightBoldIcon } from "../bold/paper-plane-right-bold.icon";
import { PaperPlaneRightDuotoneIcon } from "../duotone/paper-plane-right-duotone.icon";
import { PaperPlaneRightFillIcon } from "../fill/paper-plane-right-fill.icon";
import { PaperPlaneRightLightIcon } from "../light/paper-plane-right-light.icon";
import { PaperPlaneRightRegularIcon } from "../regular/paper-plane-right-regular.icon";
import { PaperPlaneRightThinIcon } from "../thin/paper-plane-right-thin.icon";

export const PaperPlaneRightIcon = memo(function PaperPlaneRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PaperPlaneRightBoldIcon,
      duotone: PaperPlaneRightDuotoneIcon,
      fill: PaperPlaneRightFillIcon,
      light: PaperPlaneRightLightIcon,
      regular: PaperPlaneRightRegularIcon,
      thin: PaperPlaneRightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
