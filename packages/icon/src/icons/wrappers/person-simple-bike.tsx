import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PersonSimpleBikeBold } from "../bold";
import { PersonSimpleBikeDuotone } from "../duotone";
import { PersonSimpleBikeFill } from "../fill";
import { PersonSimpleBikeLight } from "../light";
import { PersonSimpleBikeRegular } from "../regular";
import { PersonSimpleBikeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PersonSimpleBike = memo(function PersonSimpleBike(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PersonSimpleBikeBold,
      duotone: PersonSimpleBikeDuotone,
      fill: PersonSimpleBikeFill,
      light: PersonSimpleBikeLight,
      regular: PersonSimpleBikeRegular,
      thin: PersonSimpleBikeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
