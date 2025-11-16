import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NeedleBold } from "../bold";
import { NeedleDuotone } from "../duotone";
import { NeedleFill } from "../fill";
import { NeedleLight } from "../light";
import { NeedleRegular } from "../regular";
import { NeedleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Needle = memo(function Needle(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NeedleBold,
      duotone: NeedleDuotone,
      fill: NeedleFill,
      light: NeedleLight,
      regular: NeedleRegular,
      thin: NeedleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
