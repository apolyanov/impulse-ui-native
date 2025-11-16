import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PersonSimpleHikeBold } from "../bold";
import { PersonSimpleHikeDuotone } from "../duotone";
import { PersonSimpleHikeFill } from "../fill";
import { PersonSimpleHikeLight } from "../light";
import { PersonSimpleHikeRegular } from "../regular";
import { PersonSimpleHikeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PersonSimpleHike = memo(function PersonSimpleHike(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PersonSimpleHikeBold,
      duotone: PersonSimpleHikeDuotone,
      fill: PersonSimpleHikeFill,
      light: PersonSimpleHikeLight,
      regular: PersonSimpleHikeRegular,
      thin: PersonSimpleHikeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
