import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PianoKeysBoldIcon } from "../bold/piano-keys-bold.icon";
import { PianoKeysDuotoneIcon } from "../duotone/piano-keys-duotone.icon";
import { PianoKeysFillIcon } from "../fill/piano-keys-fill.icon";
import { PianoKeysLightIcon } from "../light/piano-keys-light.icon";
import { PianoKeysRegularIcon } from "../regular/piano-keys-regular.icon";
import { PianoKeysThinIcon } from "../thin/piano-keys-thin.icon";

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
