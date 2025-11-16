import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PresentationBold } from "../bold";
import { PresentationDuotone } from "../duotone";
import { PresentationFill } from "../fill";
import { PresentationLight } from "../light";
import { PresentationRegular } from "../regular";
import { PresentationThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Presentation = memo(function Presentation(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PresentationBold,
      duotone: PresentationDuotone,
      fill: PresentationFill,
      light: PresentationLight,
      regular: PresentationRegular,
      thin: PresentationThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
