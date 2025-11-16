import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { EjectBold } from "../bold";
import { EjectDuotone } from "../duotone";
import { EjectFill } from "../fill";
import { EjectLight } from "../light";
import { EjectRegular } from "../regular";
import { EjectThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Eject = memo(function Eject(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EjectBold,
      duotone: EjectDuotone,
      fill: EjectFill,
      light: EjectLight,
      regular: EjectRegular,
      thin: EjectThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
