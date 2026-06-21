import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AlignBottomBoldIcon } from "../bold";
import { AlignBottomDuotoneIcon } from "../duotone";
import { AlignBottomFillIcon } from "../fill";
import { AlignBottomLightIcon } from "../light";
import { AlignBottomRegularIcon } from "../regular";
import { AlignBottomThinIcon } from "../thin";

export const AlignBottomIcon = memo(function AlignBottom(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AlignBottomBoldIcon,
      duotone: AlignBottomDuotoneIcon,
      fill: AlignBottomFillIcon,
      light: AlignBottomLightIcon,
      regular: AlignBottomRegularIcon,
      thin: AlignBottomThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
