import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PersonSimpleWalkBoldIcon } from "../bold/person-simple-walk-bold.icon";
import { PersonSimpleWalkDuotoneIcon } from "../duotone/person-simple-walk-duotone.icon";
import { PersonSimpleWalkFillIcon } from "../fill/person-simple-walk-fill.icon";
import { PersonSimpleWalkLightIcon } from "../light/person-simple-walk-light.icon";
import { PersonSimpleWalkRegularIcon } from "../regular/person-simple-walk-regular.icon";
import { PersonSimpleWalkThinIcon } from "../thin/person-simple-walk-thin.icon";

export const PersonSimpleWalkIcon = memo(function PersonSimpleWalk(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PersonSimpleWalkBoldIcon,
      duotone: PersonSimpleWalkDuotoneIcon,
      fill: PersonSimpleWalkFillIcon,
      light: PersonSimpleWalkLightIcon,
      regular: PersonSimpleWalkRegularIcon,
      thin: PersonSimpleWalkThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
