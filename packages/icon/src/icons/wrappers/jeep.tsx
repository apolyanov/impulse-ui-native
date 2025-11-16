import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { JeepBold } from "../bold";
import { JeepDuotone } from "../duotone";
import { JeepFill } from "../fill";
import { JeepLight } from "../light";
import { JeepRegular } from "../regular";
import { JeepThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Jeep = memo(function Jeep(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: JeepBold,
      duotone: JeepDuotone,
      fill: JeepFill,
      light: JeepLight,
      regular: JeepRegular,
      thin: JeepThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
