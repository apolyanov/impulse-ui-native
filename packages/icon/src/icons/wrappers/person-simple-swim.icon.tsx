import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PersonSimpleSwimBoldIcon } from "../bold/person-simple-swim-bold.icon";
import { PersonSimpleSwimDuotoneIcon } from "../duotone/person-simple-swim-duotone.icon";
import { PersonSimpleSwimFillIcon } from "../fill/person-simple-swim-fill.icon";
import { PersonSimpleSwimLightIcon } from "../light/person-simple-swim-light.icon";
import { PersonSimpleSwimRegularIcon } from "../regular/person-simple-swim-regular.icon";
import { PersonSimpleSwimThinIcon } from "../thin/person-simple-swim-thin.icon";

export const PersonSimpleSwimIcon = memo(function PersonSimpleSwim(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PersonSimpleSwimBoldIcon,
      duotone: PersonSimpleSwimDuotoneIcon,
      fill: PersonSimpleSwimFillIcon,
      light: PersonSimpleSwimLightIcon,
      regular: PersonSimpleSwimRegularIcon,
      thin: PersonSimpleSwimThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
