import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PersonSimpleThrowBold } from "../bold";
import { PersonSimpleThrowDuotone } from "../duotone";
import { PersonSimpleThrowFill } from "../fill";
import { PersonSimpleThrowLight } from "../light";
import { PersonSimpleThrowRegular } from "../regular";
import { PersonSimpleThrowThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PersonSimpleThrow = memo(function PersonSimpleThrow(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PersonSimpleThrowBold,
      duotone: PersonSimpleThrowDuotone,
      fill: PersonSimpleThrowFill,
      light: PersonSimpleThrowLight,
      regular: PersonSimpleThrowRegular,
      thin: PersonSimpleThrowThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
