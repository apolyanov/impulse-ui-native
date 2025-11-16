import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MeteorBold } from "../bold";
import { MeteorDuotone } from "../duotone";
import { MeteorFill } from "../fill";
import { MeteorLight } from "../light";
import { MeteorRegular } from "../regular";
import { MeteorThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Meteor = memo(function Meteor(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MeteorBold,
      duotone: MeteorDuotone,
      fill: MeteorFill,
      light: MeteorLight,
      regular: MeteorRegular,
      thin: MeteorThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
