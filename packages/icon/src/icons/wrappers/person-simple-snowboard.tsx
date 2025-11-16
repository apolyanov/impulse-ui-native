import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PersonSimpleSnowboardBold } from "../bold";
import { PersonSimpleSnowboardDuotone } from "../duotone";
import { PersonSimpleSnowboardFill } from "../fill";
import { PersonSimpleSnowboardLight } from "../light";
import { PersonSimpleSnowboardRegular } from "../regular";
import { PersonSimpleSnowboardThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PersonSimpleSnowboard = memo(function PersonSimpleSnowboard(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PersonSimpleSnowboardBold,
      duotone: PersonSimpleSnowboardDuotone,
      fill: PersonSimpleSnowboardFill,
      light: PersonSimpleSnowboardLight,
      regular: PersonSimpleSnowboardRegular,
      thin: PersonSimpleSnowboardThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
