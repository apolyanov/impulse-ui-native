import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HoodieBoldIcon } from "../bold/hoodie-bold.icon";
import { HoodieDuotoneIcon } from "../duotone/hoodie-duotone.icon";
import { HoodieFillIcon } from "../fill/hoodie-fill.icon";
import { HoodieLightIcon } from "../light/hoodie-light.icon";
import { HoodieRegularIcon } from "../regular/hoodie-regular.icon";
import { HoodieThinIcon } from "../thin/hoodie-thin.icon";

export const HoodieIcon = memo(function Hoodie(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HoodieBoldIcon,
      duotone: HoodieDuotoneIcon,
      fill: HoodieFillIcon,
      light: HoodieLightIcon,
      regular: HoodieRegularIcon,
      thin: HoodieThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
