import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SupersetOfBoldIcon } from "../bold";
import { SupersetOfDuotoneIcon } from "../duotone";
import { SupersetOfFillIcon } from "../fill";
import { SupersetOfLightIcon } from "../light";
import { SupersetOfRegularIcon } from "../regular";
import { SupersetOfThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SupersetOfIcon = memo(function SupersetOf(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SupersetOfBoldIcon,
      duotone: SupersetOfDuotoneIcon,
      fill: SupersetOfFillIcon,
      light: SupersetOfLightIcon,
      regular: SupersetOfRegularIcon,
      thin: SupersetOfThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
