import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PersonSimpleSkiBoldIcon } from "../bold/person-simple-ski-bold.icon";
import { PersonSimpleSkiDuotoneIcon } from "../duotone/person-simple-ski-duotone.icon";
import { PersonSimpleSkiFillIcon } from "../fill/person-simple-ski-fill.icon";
import { PersonSimpleSkiLightIcon } from "../light/person-simple-ski-light.icon";
import { PersonSimpleSkiRegularIcon } from "../regular/person-simple-ski-regular.icon";
import { PersonSimpleSkiThinIcon } from "../thin/person-simple-ski-thin.icon";

export const PersonSimpleSkiIcon = memo(function PersonSimpleSki(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PersonSimpleSkiBoldIcon,
      duotone: PersonSimpleSkiDuotoneIcon,
      fill: PersonSimpleSkiFillIcon,
      light: PersonSimpleSkiLightIcon,
      regular: PersonSimpleSkiRegularIcon,
      thin: PersonSimpleSkiThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
