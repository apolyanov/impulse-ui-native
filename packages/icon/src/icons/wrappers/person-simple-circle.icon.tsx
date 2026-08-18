import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PersonSimpleCircleBoldIcon } from "../bold/person-simple-circle-bold.icon";
import { PersonSimpleCircleDuotoneIcon } from "../duotone/person-simple-circle-duotone.icon";
import { PersonSimpleCircleFillIcon } from "../fill/person-simple-circle-fill.icon";
import { PersonSimpleCircleLightIcon } from "../light/person-simple-circle-light.icon";
import { PersonSimpleCircleRegularIcon } from "../regular/person-simple-circle-regular.icon";
import { PersonSimpleCircleThinIcon } from "../thin/person-simple-circle-thin.icon";

export const PersonSimpleCircleIcon = memo(function PersonSimpleCircle(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PersonSimpleCircleBoldIcon,
      duotone: PersonSimpleCircleDuotoneIcon,
      fill: PersonSimpleCircleFillIcon,
      light: PersonSimpleCircleLightIcon,
      regular: PersonSimpleCircleRegularIcon,
      thin: PersonSimpleCircleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
