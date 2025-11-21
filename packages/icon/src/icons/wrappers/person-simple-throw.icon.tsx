import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PersonSimpleThrowBoldIcon } from "../bold";
import { PersonSimpleThrowDuotoneIcon } from "../duotone";
import { PersonSimpleThrowFillIcon } from "../fill";
import { PersonSimpleThrowLightIcon } from "../light";
import { PersonSimpleThrowRegularIcon } from "../regular";
import { PersonSimpleThrowThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PersonSimpleThrowIcon = memo(function PersonSimpleThrow(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PersonSimpleThrowBoldIcon,
      duotone: PersonSimpleThrowDuotoneIcon,
      fill: PersonSimpleThrowFillIcon,
      light: PersonSimpleThrowLightIcon,
      regular: PersonSimpleThrowRegularIcon,
      thin: PersonSimpleThrowThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
