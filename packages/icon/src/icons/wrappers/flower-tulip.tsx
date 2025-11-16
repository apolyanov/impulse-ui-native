import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FlowerTulipBold } from "../bold";
import { FlowerTulipDuotone } from "../duotone";
import { FlowerTulipFill } from "../fill";
import { FlowerTulipLight } from "../light";
import { FlowerTulipRegular } from "../regular";
import { FlowerTulipThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FlowerTulip = memo(function FlowerTulip(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FlowerTulipBold,
      duotone: FlowerTulipDuotone,
      fill: FlowerTulipFill,
      light: FlowerTulipLight,
      regular: FlowerTulipRegular,
      thin: FlowerTulipThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
