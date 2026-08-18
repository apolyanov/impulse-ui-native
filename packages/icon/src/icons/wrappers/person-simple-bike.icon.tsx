import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PersonSimpleBikeBoldIcon } from "../bold/person-simple-bike-bold.icon";
import { PersonSimpleBikeDuotoneIcon } from "../duotone/person-simple-bike-duotone.icon";
import { PersonSimpleBikeFillIcon } from "../fill/person-simple-bike-fill.icon";
import { PersonSimpleBikeLightIcon } from "../light/person-simple-bike-light.icon";
import { PersonSimpleBikeRegularIcon } from "../regular/person-simple-bike-regular.icon";
import { PersonSimpleBikeThinIcon } from "../thin/person-simple-bike-thin.icon";

export const PersonSimpleBikeIcon = memo(function PersonSimpleBike(
  props: IconWrapperProps,
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
