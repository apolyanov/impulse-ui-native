import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SignpostBold } from "../bold";
import { SignpostDuotone } from "../duotone";
import { SignpostFill } from "../fill";
import { SignpostLight } from "../light";
import { SignpostRegular } from "../regular";
import { SignpostThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Signpost = memo(function Signpost(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SignpostBold,
      duotone: SignpostDuotone,
      fill: SignpostFill,
      light: SignpostLight,
      regular: SignpostRegular,
      thin: SignpostThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
