import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MeteorBoldIcon } from "../bold";
import { MeteorDuotoneIcon } from "../duotone";
import { MeteorFillIcon } from "../fill";
import { MeteorLightIcon } from "../light";
import { MeteorRegularIcon } from "../regular";
import { MeteorThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
