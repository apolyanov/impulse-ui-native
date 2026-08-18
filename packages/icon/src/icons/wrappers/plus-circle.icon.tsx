import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PlusCircleBoldIcon } from "../bold/plus-circle-bold.icon";
import { PlusCircleDuotoneIcon } from "../duotone/plus-circle-duotone.icon";
import { PlusCircleFillIcon } from "../fill/plus-circle-fill.icon";
import { PlusCircleLightIcon } from "../light/plus-circle-light.icon";
import { PlusCircleRegularIcon } from "../regular/plus-circle-regular.icon";
import { PlusCircleThinIcon } from "../thin/plus-circle-thin.icon";

export const PlusCircleIcon = memo(function PlusCircle(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PlusCircleBoldIcon,
      duotone: PlusCircleDuotoneIcon,
      fill: PlusCircleFillIcon,
      light: PlusCircleLightIcon,
      regular: PlusCircleRegularIcon,
      thin: PlusCircleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
