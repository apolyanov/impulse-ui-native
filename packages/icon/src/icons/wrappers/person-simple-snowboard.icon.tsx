import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PersonSimpleSnowboardBoldIcon } from "../bold/person-simple-snowboard-bold.icon";
import { PersonSimpleSnowboardDuotoneIcon } from "../duotone/person-simple-snowboard-duotone.icon";
import { PersonSimpleSnowboardFillIcon } from "../fill/person-simple-snowboard-fill.icon";
import { PersonSimpleSnowboardLightIcon } from "../light/person-simple-snowboard-light.icon";
import { PersonSimpleSnowboardRegularIcon } from "../regular/person-simple-snowboard-regular.icon";
import { PersonSimpleSnowboardThinIcon } from "../thin/person-simple-snowboard-thin.icon";

export const PersonSimpleSnowboardIcon = memo(function PersonSimpleSnowboard(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PersonSimpleSnowboardBoldIcon,
      duotone: PersonSimpleSnowboardDuotoneIcon,
      fill: PersonSimpleSnowboardFillIcon,
      light: PersonSimpleSnowboardLightIcon,
      regular: PersonSimpleSnowboardRegularIcon,
      thin: PersonSimpleSnowboardThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
