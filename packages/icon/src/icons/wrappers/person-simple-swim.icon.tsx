import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PersonSimpleSwimBoldIcon } from "../bold";
import { PersonSimpleSwimDuotoneIcon } from "../duotone";
import { PersonSimpleSwimFillIcon } from "../fill";
import { PersonSimpleSwimLightIcon } from "../light";
import { PersonSimpleSwimRegularIcon } from "../regular";
import { PersonSimpleSwimThinIcon } from "../thin";

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
