import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PianoKeysBold } from "../bold";
import { PianoKeysDuotone } from "../duotone";
import { PianoKeysFill } from "../fill";
import { PianoKeysLight } from "../light";
import { PianoKeysRegular } from "../regular";
import { PianoKeysThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PianoKeys = memo(function PianoKeys(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PianoKeysBold,
      duotone: PianoKeysDuotone,
      fill: PianoKeysFill,
      light: PianoKeysLight,
      regular: PianoKeysRegular,
      thin: PianoKeysThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
