import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BeanieBold } from "../bold";
import { BeanieDuotone } from "../duotone";
import { BeanieFill } from "../fill";
import { BeanieLight } from "../light";
import { BeanieRegular } from "../regular";
import { BeanieThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Beanie = memo(function Beanie(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BeanieBold,
      duotone: BeanieDuotone,
      fill: BeanieFill,
      light: BeanieLight,
      regular: BeanieRegular,
      thin: BeanieThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
