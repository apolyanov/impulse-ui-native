import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { WaveSineBoldIcon } from "../bold/wave-sine-bold.icon";
import { WaveSineDuotoneIcon } from "../duotone/wave-sine-duotone.icon";
import { WaveSineFillIcon } from "../fill/wave-sine-fill.icon";
import { WaveSineLightIcon } from "../light/wave-sine-light.icon";
import { WaveSineRegularIcon } from "../regular/wave-sine-regular.icon";
import { WaveSineThinIcon } from "../thin/wave-sine-thin.icon";

export const WaveSineIcon = memo(function WaveSine(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WaveSineBoldIcon,
      duotone: WaveSineDuotoneIcon,
      fill: WaveSineFillIcon,
      light: WaveSineLightIcon,
      regular: WaveSineRegularIcon,
      thin: WaveSineThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
