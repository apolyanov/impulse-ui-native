import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SketchLogoBoldIcon } from "../bold/sketch-logo-bold.icon";
import { SketchLogoDuotoneIcon } from "../duotone/sketch-logo-duotone.icon";
import { SketchLogoFillIcon } from "../fill/sketch-logo-fill.icon";
import { SketchLogoLightIcon } from "../light/sketch-logo-light.icon";
import { SketchLogoRegularIcon } from "../regular/sketch-logo-regular.icon";
import { SketchLogoThinIcon } from "../thin/sketch-logo-thin.icon";

export const SketchLogoIcon = memo(function SketchLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SketchLogoBoldIcon,
      duotone: SketchLogoDuotoneIcon,
      fill: SketchLogoFillIcon,
      light: SketchLogoLightIcon,
      regular: SketchLogoRegularIcon,
      thin: SketchLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
