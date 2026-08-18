import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BeanieBoldIcon } from "../bold/beanie-bold.icon";
import { BeanieDuotoneIcon } from "../duotone/beanie-duotone.icon";
import { BeanieFillIcon } from "../fill/beanie-fill.icon";
import { BeanieLightIcon } from "../light/beanie-light.icon";
import { BeanieRegularIcon } from "../regular/beanie-regular.icon";
import { BeanieThinIcon } from "../thin/beanie-thin.icon";

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
