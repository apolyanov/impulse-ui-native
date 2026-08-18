import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FadersBoldIcon } from "../bold/faders-bold.icon";
import { FadersDuotoneIcon } from "../duotone/faders-duotone.icon";
import { FadersFillIcon } from "../fill/faders-fill.icon";
import { FadersLightIcon } from "../light/faders-light.icon";
import { FadersRegularIcon } from "../regular/faders-regular.icon";
import { FadersThinIcon } from "../thin/faders-thin.icon";

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
