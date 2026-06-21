import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FlowerTulipBoldIcon } from "../bold";
import { FlowerTulipDuotoneIcon } from "../duotone";
import { FlowerTulipFillIcon } from "../fill";
import { FlowerTulipLightIcon } from "../light";
import { FlowerTulipRegularIcon } from "../regular";
import { FlowerTulipThinIcon } from "../thin";

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
