import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DotsThreeOutlineVerticalBoldIcon } from "../bold/dots-three-outline-vertical-bold.icon";
import { DotsThreeOutlineVerticalDuotoneIcon } from "../duotone/dots-three-outline-vertical-duotone.icon";
import { DotsThreeOutlineVerticalFillIcon } from "../fill/dots-three-outline-vertical-fill.icon";
import { DotsThreeOutlineVerticalLightIcon } from "../light/dots-three-outline-vertical-light.icon";
import { DotsThreeOutlineVerticalRegularIcon } from "../regular/dots-three-outline-vertical-regular.icon";
import { DotsThreeOutlineVerticalThinIcon } from "../thin/dots-three-outline-vertical-thin.icon";

export const DotsThreeOutlineVerticalIcon = memo(
  function DotsThreeOutlineVertical(props: IconWrapperProps) {
    const Icon = useMemo(() => {
      const icons: Record<IconVariant, ComponentType<SvgProps>> = {
        bold: DotsThreeOutlineVerticalBoldIcon,
        duotone: DotsThreeOutlineVerticalDuotoneIcon,
        fill: DotsThreeOutlineVerticalFillIcon,
        light: DotsThreeOutlineVerticalLightIcon,
        regular: DotsThreeOutlineVerticalRegularIcon,
        thin: DotsThreeOutlineVerticalThinIcon,
      };

      return icons[props.variant ?? "regular"];
    }, [props.variant]);

    return <Icon {...props} />;
  },
);
