import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PresentationBoldIcon } from "../bold/presentation-bold.icon";
import { PresentationDuotoneIcon } from "../duotone/presentation-duotone.icon";
import { PresentationFillIcon } from "../fill/presentation-fill.icon";
import { PresentationLightIcon } from "../light/presentation-light.icon";
import { PresentationRegularIcon } from "../regular/presentation-regular.icon";
import { PresentationThinIcon } from "../thin/presentation-thin.icon";

export const PresentationIcon = memo(function Presentation(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PresentationBoldIcon,
      duotone: PresentationDuotoneIcon,
      fill: PresentationFillIcon,
      light: PresentationLightIcon,
      regular: PresentationRegularIcon,
      thin: PresentationThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
