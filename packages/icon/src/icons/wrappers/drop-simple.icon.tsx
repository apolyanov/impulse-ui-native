import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DropSimpleBoldIcon } from "../bold/drop-simple-bold.icon";
import { DropSimpleDuotoneIcon } from "../duotone/drop-simple-duotone.icon";
import { DropSimpleFillIcon } from "../fill/drop-simple-fill.icon";
import { DropSimpleLightIcon } from "../light/drop-simple-light.icon";
import { DropSimpleRegularIcon } from "../regular/drop-simple-regular.icon";
import { DropSimpleThinIcon } from "../thin/drop-simple-thin.icon";

export const DropSimpleIcon = memo(function DropSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DropSimpleBoldIcon,
      duotone: DropSimpleDuotoneIcon,
      fill: DropSimpleFillIcon,
      light: DropSimpleLightIcon,
      regular: DropSimpleRegularIcon,
      thin: DropSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
