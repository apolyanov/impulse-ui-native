import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PencilSimpleBoldIcon } from "../bold/pencil-simple-bold.icon";
import { PencilSimpleDuotoneIcon } from "../duotone/pencil-simple-duotone.icon";
import { PencilSimpleFillIcon } from "../fill/pencil-simple-fill.icon";
import { PencilSimpleLightIcon } from "../light/pencil-simple-light.icon";
import { PencilSimpleRegularIcon } from "../regular/pencil-simple-regular.icon";
import { PencilSimpleThinIcon } from "../thin/pencil-simple-thin.icon";

export const PencilSimpleIcon = memo(function PencilSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PencilSimpleBoldIcon,
      duotone: PencilSimpleDuotoneIcon,
      fill: PencilSimpleFillIcon,
      light: PencilSimpleLightIcon,
      regular: PencilSimpleRegularIcon,
      thin: PencilSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
