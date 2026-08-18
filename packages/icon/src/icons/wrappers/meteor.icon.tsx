import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MeteorBoldIcon } from "../bold/meteor-bold.icon";
import { MeteorDuotoneIcon } from "../duotone/meteor-duotone.icon";
import { MeteorFillIcon } from "../fill/meteor-fill.icon";
import { MeteorLightIcon } from "../light/meteor-light.icon";
import { MeteorRegularIcon } from "../regular/meteor-regular.icon";
import { MeteorThinIcon } from "../thin/meteor-thin.icon";

export const MeteorIcon = memo(function Meteor(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MeteorBoldIcon,
      duotone: MeteorDuotoneIcon,
      fill: MeteorFillIcon,
      light: MeteorLightIcon,
      regular: MeteorRegularIcon,
      thin: MeteorThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
