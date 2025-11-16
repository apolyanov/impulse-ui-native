import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PersonSimpleBold } from "../bold";
import { PersonSimpleDuotone } from "../duotone";
import { PersonSimpleFill } from "../fill";
import { PersonSimpleLight } from "../light";
import { PersonSimpleRegular } from "../regular";
import { PersonSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PersonSimple = memo(function PersonSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PersonSimpleBold,
      duotone: PersonSimpleDuotone,
      fill: PersonSimpleFill,
      light: PersonSimpleLight,
      regular: PersonSimpleRegular,
      thin: PersonSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
