import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SupersetOfBold } from "../bold";
import { SupersetOfDuotone } from "../duotone";
import { SupersetOfFill } from "../fill";
import { SupersetOfLight } from "../light";
import { SupersetOfRegular } from "../regular";
import { SupersetOfThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SupersetOf = memo(function SupersetOf(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SupersetOfBold,
      duotone: SupersetOfDuotone,
      fill: SupersetOfFill,
      light: SupersetOfLight,
      regular: SupersetOfRegular,
      thin: SupersetOfThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
