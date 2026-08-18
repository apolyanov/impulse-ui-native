import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ToiletPaperBoldIcon } from "../bold/toilet-paper-bold.icon";
import { ToiletPaperDuotoneIcon } from "../duotone/toilet-paper-duotone.icon";
import { ToiletPaperFillIcon } from "../fill/toilet-paper-fill.icon";
import { ToiletPaperLightIcon } from "../light/toilet-paper-light.icon";
import { ToiletPaperRegularIcon } from "../regular/toilet-paper-regular.icon";
import { ToiletPaperThinIcon } from "../thin/toilet-paper-thin.icon";

export const ToiletPaperIcon = memo(function ToiletPaper(
  props: IconWrapperProps,
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
