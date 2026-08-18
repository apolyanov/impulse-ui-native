import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FishBoldIcon } from "../bold/fish-bold.icon";
import { FishDuotoneIcon } from "../duotone/fish-duotone.icon";
import { FishFillIcon } from "../fill/fish-fill.icon";
import { FishLightIcon } from "../light/fish-light.icon";
import { FishRegularIcon } from "../regular/fish-regular.icon";
import { FishThinIcon } from "../thin/fish-thin.icon";

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
