import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GenderMaleBold } from "../bold";
import { GenderMaleDuotone } from "../duotone";
import { GenderMaleFill } from "../fill";
import { GenderMaleLight } from "../light";
import { GenderMaleRegular } from "../regular";
import { GenderMaleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GenderMale = memo(function GenderMale(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GenderMaleBold,
      duotone: GenderMaleDuotone,
      fill: GenderMaleFill,
      light: GenderMaleLight,
      regular: GenderMaleRegular,
      thin: GenderMaleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
