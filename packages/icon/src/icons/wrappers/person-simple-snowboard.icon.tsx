import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PersonSimpleSnowboardBoldIcon } from "../bold";
import { PersonSimpleSnowboardDuotoneIcon } from "../duotone";
import { PersonSimpleSnowboardFillIcon } from "../fill";
import { PersonSimpleSnowboardLightIcon } from "../light";
import { PersonSimpleSnowboardRegularIcon } from "../regular";
import { PersonSimpleSnowboardThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PersonSimpleSnowboardIcon = memo(function PersonSimpleSnowboard(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PersonSimpleSnowboardBoldIcon,
      duotone: PersonSimpleSnowboardDuotoneIcon,
      fill: PersonSimpleSnowboardFillIcon,
      light: PersonSimpleSnowboardLightIcon,
      regular: PersonSimpleSnowboardRegularIcon,
      thin: PersonSimpleSnowboardThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
