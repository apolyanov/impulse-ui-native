import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FishBold } from "../bold";
import { FishDuotone } from "../duotone";
import { FishFill } from "../fill";
import { FishLight } from "../light";
import { FishRegular } from "../regular";
import { FishThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Fish = memo(function Fish(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FishBold,
      duotone: FishDuotone,
      fill: FishFill,
      light: FishLight,
      regular: FishRegular,
      thin: FishThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
