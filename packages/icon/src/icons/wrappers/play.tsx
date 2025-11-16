import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PlayBold } from "../bold";
import { PlayDuotone } from "../duotone";
import { PlayFill } from "../fill";
import { PlayLight } from "../light";
import { PlayRegular } from "../regular";
import { PlayThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Play = memo(function Play(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PlayBold,
      duotone: PlayDuotone,
      fill: PlayFill,
      light: PlayLight,
      regular: PlayRegular,
      thin: PlayThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
