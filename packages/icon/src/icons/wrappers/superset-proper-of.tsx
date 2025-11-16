import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SupersetProperOfBold } from "../bold";
import { SupersetProperOfDuotone } from "../duotone";
import { SupersetProperOfFill } from "../fill";
import { SupersetProperOfLight } from "../light";
import { SupersetProperOfRegular } from "../regular";
import { SupersetProperOfThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SupersetProperOf = memo(function SupersetProperOf(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SupersetProperOfBold,
      duotone: SupersetProperOfDuotone,
      fill: SupersetProperOfFill,
      light: SupersetProperOfLight,
      regular: SupersetProperOfRegular,
      thin: SupersetProperOfThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
