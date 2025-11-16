import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SketchLogoBold } from "../bold";
import { SketchLogoDuotone } from "../duotone";
import { SketchLogoFill } from "../fill";
import { SketchLogoLight } from "../light";
import { SketchLogoRegular } from "../regular";
import { SketchLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SketchLogo = memo(function SketchLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SketchLogoBold,
      duotone: SketchLogoDuotone,
      fill: SketchLogoFill,
      light: SketchLogoLight,
      regular: SketchLogoRegular,
      thin: SketchLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
