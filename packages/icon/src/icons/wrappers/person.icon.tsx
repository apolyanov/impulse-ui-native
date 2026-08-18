import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PersonBoldIcon } from "../bold/person-bold.icon";
import { PersonDuotoneIcon } from "../duotone/person-duotone.icon";
import { PersonFillIcon } from "../fill/person-fill.icon";
import { PersonLightIcon } from "../light/person-light.icon";
import { PersonRegularIcon } from "../regular/person-regular.icon";
import { PersonThinIcon } from "../thin/person-thin.icon";

export const PersonIcon = memo(function Person(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PersonBoldIcon,
      duotone: PersonDuotoneIcon,
      fill: PersonFillIcon,
      light: PersonLightIcon,
      regular: PersonRegularIcon,
      thin: PersonThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
