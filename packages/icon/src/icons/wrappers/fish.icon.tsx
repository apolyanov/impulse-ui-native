import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FishBoldIcon } from "../bold";
import { FishDuotoneIcon } from "../duotone";
import { FishFillIcon } from "../fill";
import { FishLightIcon } from "../light";
import { FishRegularIcon } from "../regular";
import { FishThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FishIcon = memo(function Fish(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FishBoldIcon,
      duotone: FishDuotoneIcon,
      fill: FishFillIcon,
      light: FishLightIcon,
      regular: FishRegularIcon,
      thin: FishThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
