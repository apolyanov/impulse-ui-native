import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TrashSimpleBoldIcon } from "../bold";
import { TrashSimpleDuotoneIcon } from "../duotone";
import { TrashSimpleFillIcon } from "../fill";
import { TrashSimpleLightIcon } from "../light";
import { TrashSimpleRegularIcon } from "../regular";
import { TrashSimpleThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TrashSimpleIcon = memo(function TrashSimple(
  props: IconWrapperProps
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
