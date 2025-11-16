import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PaperPlaneRightBold } from "../bold";
import { PaperPlaneRightDuotone } from "../duotone";
import { PaperPlaneRightFill } from "../fill";
import { PaperPlaneRightLight } from "../light";
import { PaperPlaneRightRegular } from "../regular";
import { PaperPlaneRightThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PaperPlaneRight = memo(function PaperPlaneRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PaperPlaneRightBold,
      duotone: PaperPlaneRightDuotone,
      fill: PaperPlaneRightFill,
      light: PaperPlaneRightLight,
      regular: PaperPlaneRightRegular,
      thin: PaperPlaneRightThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
