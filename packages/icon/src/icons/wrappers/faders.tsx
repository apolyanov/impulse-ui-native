import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FadersBold } from "../bold";
import { FadersDuotone } from "../duotone";
import { FadersFill } from "../fill";
import { FadersLight } from "../light";
import { FadersRegular } from "../regular";
import { FadersThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Faders = memo(function Faders(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FadersBold,
      duotone: FadersDuotone,
      fill: FadersFill,
      light: FadersLight,
      regular: FadersRegular,
      thin: FadersThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
