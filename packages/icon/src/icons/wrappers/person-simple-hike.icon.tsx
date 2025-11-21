import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PersonSimpleHikeBoldIcon } from "../bold";
import { PersonSimpleHikeDuotoneIcon } from "../duotone";
import { PersonSimpleHikeFillIcon } from "../fill";
import { PersonSimpleHikeLightIcon } from "../light";
import { PersonSimpleHikeRegularIcon } from "../regular";
import { PersonSimpleHikeThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PersonSimpleHikeIcon = memo(function PersonSimpleHike(
  props: IconWrapperProps
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
