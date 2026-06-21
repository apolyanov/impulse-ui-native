import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PersonSimpleWalkBoldIcon } from "../bold";
import { PersonSimpleWalkDuotoneIcon } from "../duotone";
import { PersonSimpleWalkFillIcon } from "../fill";
import { PersonSimpleWalkLightIcon } from "../light";
import { PersonSimpleWalkRegularIcon } from "../regular";
import { PersonSimpleWalkThinIcon } from "../thin";

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
