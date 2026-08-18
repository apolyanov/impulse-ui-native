import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SupersetProperOfBoldIcon } from "../bold/superset-proper-of-bold.icon";
import { SupersetProperOfDuotoneIcon } from "../duotone/superset-proper-of-duotone.icon";
import { SupersetProperOfFillIcon } from "../fill/superset-proper-of-fill.icon";
import { SupersetProperOfLightIcon } from "../light/superset-proper-of-light.icon";
import { SupersetProperOfRegularIcon } from "../regular/superset-proper-of-regular.icon";
import { SupersetProperOfThinIcon } from "../thin/superset-proper-of-thin.icon";

export const SupersetProperOfIcon = memo(function SupersetProperOf(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SupersetProperOfBoldIcon,
      duotone: SupersetProperOfDuotoneIcon,
      fill: SupersetProperOfFillIcon,
      light: SupersetProperOfLightIcon,
      regular: SupersetProperOfRegularIcon,
      thin: SupersetProperOfThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
