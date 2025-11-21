import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ToiletPaperBoldIcon } from "../bold";
import { ToiletPaperDuotoneIcon } from "../duotone";
import { ToiletPaperFillIcon } from "../fill";
import { ToiletPaperLightIcon } from "../light";
import { ToiletPaperRegularIcon } from "../regular";
import { ToiletPaperThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ToiletPaperIcon = memo(function ToiletPaper(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ToiletPaperBoldIcon,
      duotone: ToiletPaperDuotoneIcon,
      fill: ToiletPaperFillIcon,
      light: ToiletPaperLightIcon,
      regular: ToiletPaperRegularIcon,
      thin: ToiletPaperThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
