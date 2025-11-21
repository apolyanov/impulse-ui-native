import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FadersBoldIcon } from "../bold";
import { FadersDuotoneIcon } from "../duotone";
import { FadersFillIcon } from "../fill";
import { FadersLightIcon } from "../light";
import { FadersRegularIcon } from "../regular";
import { FadersThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FadersIcon = memo(function Faders(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FadersBoldIcon,
      duotone: FadersDuotoneIcon,
      fill: FadersFillIcon,
      light: FadersLightIcon,
      regular: FadersRegularIcon,
      thin: FadersThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
