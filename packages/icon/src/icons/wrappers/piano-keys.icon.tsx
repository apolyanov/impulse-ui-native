import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PianoKeysBoldIcon } from "../bold";
import { PianoKeysDuotoneIcon } from "../duotone";
import { PianoKeysFillIcon } from "../fill";
import { PianoKeysLightIcon } from "../light";
import { PianoKeysRegularIcon } from "../regular";
import { PianoKeysThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PianoKeysIcon = memo(function PianoKeys(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PianoKeysBoldIcon,
      duotone: PianoKeysDuotoneIcon,
      fill: PianoKeysFillIcon,
      light: PianoKeysLightIcon,
      regular: PianoKeysRegularIcon,
      thin: PianoKeysThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
