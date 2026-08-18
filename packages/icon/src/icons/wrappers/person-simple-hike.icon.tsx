import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PersonSimpleHikeBoldIcon } from "../bold/person-simple-hike-bold.icon";
import { PersonSimpleHikeDuotoneIcon } from "../duotone/person-simple-hike-duotone.icon";
import { PersonSimpleHikeFillIcon } from "../fill/person-simple-hike-fill.icon";
import { PersonSimpleHikeLightIcon } from "../light/person-simple-hike-light.icon";
import { PersonSimpleHikeRegularIcon } from "../regular/person-simple-hike-regular.icon";
import { PersonSimpleHikeThinIcon } from "../thin/person-simple-hike-thin.icon";

export const PersonSimpleHikeIcon = memo(function PersonSimpleHike(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PersonSimpleHikeBoldIcon,
      duotone: PersonSimpleHikeDuotoneIcon,
      fill: PersonSimpleHikeFillIcon,
      light: PersonSimpleHikeLightIcon,
      regular: PersonSimpleHikeRegularIcon,
      thin: PersonSimpleHikeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
