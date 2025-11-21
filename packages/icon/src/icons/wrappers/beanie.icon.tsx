import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BeanieBoldIcon } from "../bold";
import { BeanieDuotoneIcon } from "../duotone";
import { BeanieFillIcon } from "../fill";
import { BeanieLightIcon } from "../light";
import { BeanieRegularIcon } from "../regular";
import { BeanieThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BeanieIcon = memo(function Beanie(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BeanieBoldIcon,
      duotone: BeanieDuotoneIcon,
      fill: BeanieFillIcon,
      light: BeanieLightIcon,
      regular: BeanieRegularIcon,
      thin: BeanieThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
