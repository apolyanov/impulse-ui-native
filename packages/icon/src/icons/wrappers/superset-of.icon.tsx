import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SupersetOfBoldIcon } from "../bold/superset-of-bold.icon";
import { SupersetOfDuotoneIcon } from "../duotone/superset-of-duotone.icon";
import { SupersetOfFillIcon } from "../fill/superset-of-fill.icon";
import { SupersetOfLightIcon } from "../light/superset-of-light.icon";
import { SupersetOfRegularIcon } from "../regular/superset-of-regular.icon";
import { SupersetOfThinIcon } from "../thin/superset-of-thin.icon";

export const SupersetOfIcon = memo(function SupersetOf(
  props: IconWrapperProps,
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
