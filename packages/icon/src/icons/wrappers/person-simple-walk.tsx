import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PersonSimpleWalkBold } from "../bold";
import { PersonSimpleWalkDuotone } from "../duotone";
import { PersonSimpleWalkFill } from "../fill";
import { PersonSimpleWalkLight } from "../light";
import { PersonSimpleWalkRegular } from "../regular";
import { PersonSimpleWalkThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PersonSimpleWalk = memo(function PersonSimpleWalk(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PersonSimpleWalkBold,
      duotone: PersonSimpleWalkDuotone,
      fill: PersonSimpleWalkFill,
      light: PersonSimpleWalkLight,
      regular: PersonSimpleWalkRegular,
      thin: PersonSimpleWalkThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
