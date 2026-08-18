import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DotsThreeBoldIcon } from "../bold/dots-three-bold.icon";
import { DotsThreeDuotoneIcon } from "../duotone/dots-three-duotone.icon";
import { DotsThreeFillIcon } from "../fill/dots-three-fill.icon";
import { DotsThreeLightIcon } from "../light/dots-three-light.icon";
import { DotsThreeRegularIcon } from "../regular/dots-three-regular.icon";
import { DotsThreeThinIcon } from "../thin/dots-three-thin.icon";

export const DotsThreeIcon = memo(function DotsThree(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DotsThreeBoldIcon,
      duotone: DotsThreeDuotoneIcon,
      fill: DotsThreeFillIcon,
      light: DotsThreeLightIcon,
      regular: DotsThreeRegularIcon,
      thin: DotsThreeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
