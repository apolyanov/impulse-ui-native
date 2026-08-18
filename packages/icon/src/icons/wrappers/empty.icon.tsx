import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { EmptyBoldIcon } from "../bold/empty-bold.icon";
import { EmptyDuotoneIcon } from "../duotone/empty-duotone.icon";
import { EmptyFillIcon } from "../fill/empty-fill.icon";
import { EmptyLightIcon } from "../light/empty-light.icon";
import { EmptyRegularIcon } from "../regular/empty-regular.icon";
import { EmptyThinIcon } from "../thin/empty-thin.icon";

export const EmptyIcon = memo(function Empty(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EmptyBoldIcon,
      duotone: EmptyDuotoneIcon,
      fill: EmptyFillIcon,
      light: EmptyLightIcon,
      regular: EmptyRegularIcon,
      thin: EmptyThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
