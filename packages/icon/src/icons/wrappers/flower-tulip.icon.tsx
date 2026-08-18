import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FlowerTulipBoldIcon } from "../bold/flower-tulip-bold.icon";
import { FlowerTulipDuotoneIcon } from "../duotone/flower-tulip-duotone.icon";
import { FlowerTulipFillIcon } from "../fill/flower-tulip-fill.icon";
import { FlowerTulipLightIcon } from "../light/flower-tulip-light.icon";
import { FlowerTulipRegularIcon } from "../regular/flower-tulip-regular.icon";
import { FlowerTulipThinIcon } from "../thin/flower-tulip-thin.icon";

export const FlowerTulipIcon = memo(function FlowerTulip(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FlowerTulipBoldIcon,
      duotone: FlowerTulipDuotoneIcon,
      fill: FlowerTulipFillIcon,
      light: FlowerTulipLightIcon,
      regular: FlowerTulipRegularIcon,
      thin: FlowerTulipThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
