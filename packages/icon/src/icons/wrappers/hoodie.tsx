import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HoodieBold } from "../bold";
import { HoodieDuotone } from "../duotone";
import { HoodieFill } from "../fill";
import { HoodieLight } from "../light";
import { HoodieRegular } from "../regular";
import { HoodieThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Hoodie = memo(function Hoodie(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HoodieBold,
      duotone: HoodieDuotone,
      fill: HoodieFill,
      light: HoodieLight,
      regular: HoodieRegular,
      thin: HoodieThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
