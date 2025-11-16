import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PersonSimpleSkiBold } from "../bold";
import { PersonSimpleSkiDuotone } from "../duotone";
import { PersonSimpleSkiFill } from "../fill";
import { PersonSimpleSkiLight } from "../light";
import { PersonSimpleSkiRegular } from "../regular";
import { PersonSimpleSkiThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PersonSimpleSki = memo(function PersonSimpleSki(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PersonSimpleSkiBold,
      duotone: PersonSimpleSkiDuotone,
      fill: PersonSimpleSkiFill,
      light: PersonSimpleSkiLight,
      regular: PersonSimpleSkiRegular,
      thin: PersonSimpleSkiThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
