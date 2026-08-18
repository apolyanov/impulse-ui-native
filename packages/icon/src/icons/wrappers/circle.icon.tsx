import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CircleBoldIcon } from "../bold/circle-bold.icon";
import { CircleDuotoneIcon } from "../duotone/circle-duotone.icon";
import { CircleFillIcon } from "../fill/circle-fill.icon";
import { CircleLightIcon } from "../light/circle-light.icon";
import { CircleRegularIcon } from "../regular/circle-regular.icon";
import { CircleThinIcon } from "../thin/circle-thin.icon";

export const CircleIcon = memo(function Circle(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CircleBoldIcon,
      duotone: CircleDuotoneIcon,
      fill: CircleFillIcon,
      light: CircleLightIcon,
      regular: CircleRegularIcon,
      thin: CircleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
