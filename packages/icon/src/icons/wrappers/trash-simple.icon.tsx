import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TrashSimpleBoldIcon } from "../bold/trash-simple-bold.icon";
import { TrashSimpleDuotoneIcon } from "../duotone/trash-simple-duotone.icon";
import { TrashSimpleFillIcon } from "../fill/trash-simple-fill.icon";
import { TrashSimpleLightIcon } from "../light/trash-simple-light.icon";
import { TrashSimpleRegularIcon } from "../regular/trash-simple-regular.icon";
import { TrashSimpleThinIcon } from "../thin/trash-simple-thin.icon";

export const TrashSimpleIcon = memo(function TrashSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TrashSimpleBoldIcon,
      duotone: TrashSimpleDuotoneIcon,
      fill: TrashSimpleFillIcon,
      light: TrashSimpleLightIcon,
      regular: TrashSimpleRegularIcon,
      thin: TrashSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
