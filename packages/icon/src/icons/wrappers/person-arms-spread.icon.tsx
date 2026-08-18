import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PersonArmsSpreadBoldIcon } from "../bold/person-arms-spread-bold.icon";
import { PersonArmsSpreadDuotoneIcon } from "../duotone/person-arms-spread-duotone.icon";
import { PersonArmsSpreadFillIcon } from "../fill/person-arms-spread-fill.icon";
import { PersonArmsSpreadLightIcon } from "../light/person-arms-spread-light.icon";
import { PersonArmsSpreadRegularIcon } from "../regular/person-arms-spread-regular.icon";
import { PersonArmsSpreadThinIcon } from "../thin/person-arms-spread-thin.icon";

export const PersonArmsSpreadIcon = memo(function PersonArmsSpread(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PersonArmsSpreadBoldIcon,
      duotone: PersonArmsSpreadDuotoneIcon,
      fill: PersonArmsSpreadFillIcon,
      light: PersonArmsSpreadLightIcon,
      regular: PersonArmsSpreadRegularIcon,
      thin: PersonArmsSpreadThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
