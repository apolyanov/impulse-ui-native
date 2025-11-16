import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WaveSineBold } from "../bold";
import { WaveSineDuotone } from "../duotone";
import { WaveSineFill } from "../fill";
import { WaveSineLight } from "../light";
import { WaveSineRegular } from "../regular";
import { WaveSineThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const WaveSine = memo(function WaveSine(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WaveSineBold,
      duotone: WaveSineDuotone,
      fill: WaveSineFill,
      light: WaveSineLight,
      regular: WaveSineRegular,
      thin: WaveSineThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
