import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PersonSimpleBikeBoldIcon } from "../bold";
import { PersonSimpleBikeDuotoneIcon } from "../duotone";
import { PersonSimpleBikeFillIcon } from "../fill";
import { PersonSimpleBikeLightIcon } from "../light";
import { PersonSimpleBikeRegularIcon } from "../regular";
import { PersonSimpleBikeThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PersonSimpleBikeIcon = memo(function PersonSimpleBike(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PersonSimpleBikeBoldIcon,
      duotone: PersonSimpleBikeDuotoneIcon,
      fill: PersonSimpleBikeFillIcon,
      light: PersonSimpleBikeLightIcon,
      regular: PersonSimpleBikeRegularIcon,
      thin: PersonSimpleBikeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
