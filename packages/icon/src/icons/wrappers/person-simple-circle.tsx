import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PersonSimpleCircleBold } from "../bold";
import { PersonSimpleCircleDuotone } from "../duotone";
import { PersonSimpleCircleFill } from "../fill";
import { PersonSimpleCircleLight } from "../light";
import { PersonSimpleCircleRegular } from "../regular";
import { PersonSimpleCircleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PersonSimpleCircle = memo(function PersonSimpleCircle(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PersonSimpleCircleBold,
      duotone: PersonSimpleCircleDuotone,
      fill: PersonSimpleCircleFill,
      light: PersonSimpleCircleLight,
      regular: PersonSimpleCircleRegular,
      thin: PersonSimpleCircleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
