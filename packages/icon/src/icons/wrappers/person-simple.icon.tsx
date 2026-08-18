import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PersonSimpleBoldIcon } from "../bold/person-simple-bold.icon";
import { PersonSimpleDuotoneIcon } from "../duotone/person-simple-duotone.icon";
import { PersonSimpleFillIcon } from "../fill/person-simple-fill.icon";
import { PersonSimpleLightIcon } from "../light/person-simple-light.icon";
import { PersonSimpleRegularIcon } from "../regular/person-simple-regular.icon";
import { PersonSimpleThinIcon } from "../thin/person-simple-thin.icon";

export const PersonSimpleIcon = memo(function PersonSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PersonSimpleBoldIcon,
      duotone: PersonSimpleDuotoneIcon,
      fill: PersonSimpleFillIcon,
      light: PersonSimpleLightIcon,
      regular: PersonSimpleRegularIcon,
      thin: PersonSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
