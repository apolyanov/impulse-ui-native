import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AlignBottomBoldIcon } from "../bold/align-bottom-bold.icon";
import { AlignBottomDuotoneIcon } from "../duotone/align-bottom-duotone.icon";
import { AlignBottomFillIcon } from "../fill/align-bottom-fill.icon";
import { AlignBottomLightIcon } from "../light/align-bottom-light.icon";
import { AlignBottomRegularIcon } from "../regular/align-bottom-regular.icon";
import { AlignBottomThinIcon } from "../thin/align-bottom-thin.icon";

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
