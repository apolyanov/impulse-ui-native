import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PresentationBoldIcon } from "../bold";
import { PresentationDuotoneIcon } from "../duotone";
import { PresentationFillIcon } from "../fill";
import { PresentationLightIcon } from "../light";
import { PresentationRegularIcon } from "../regular";
import { PresentationThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PresentationIcon = memo(function Presentation(
  props: IconWrapperProps
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
