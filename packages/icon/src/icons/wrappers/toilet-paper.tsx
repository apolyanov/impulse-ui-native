import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ToiletPaperBold } from "../bold";
import { ToiletPaperDuotone } from "../duotone";
import { ToiletPaperFill } from "../fill";
import { ToiletPaperLight } from "../light";
import { ToiletPaperRegular } from "../regular";
import { ToiletPaperThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ToiletPaper = memo(function ToiletPaper(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ToiletPaperBold,
      duotone: ToiletPaperDuotone,
      fill: ToiletPaperFill,
      light: ToiletPaperLight,
      regular: ToiletPaperRegular,
      thin: ToiletPaperThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
