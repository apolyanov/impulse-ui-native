import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PersonArmsSpreadBold } from "../bold";
import { PersonArmsSpreadDuotone } from "../duotone";
import { PersonArmsSpreadFill } from "../fill";
import { PersonArmsSpreadLight } from "../light";
import { PersonArmsSpreadRegular } from "../regular";
import { PersonArmsSpreadThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PersonArmsSpread = memo(function PersonArmsSpread(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PersonArmsSpreadBold,
      duotone: PersonArmsSpreadDuotone,
      fill: PersonArmsSpreadFill,
      light: PersonArmsSpreadLight,
      regular: PersonArmsSpreadRegular,
      thin: PersonArmsSpreadThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
