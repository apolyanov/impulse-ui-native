import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { XCircleBoldIcon } from "../bold/x-circle-bold.icon";
import { XCircleDuotoneIcon } from "../duotone/x-circle-duotone.icon";
import { XCircleFillIcon } from "../fill/x-circle-fill.icon";
import { XCircleLightIcon } from "../light/x-circle-light.icon";
import { XCircleRegularIcon } from "../regular/x-circle-regular.icon";
import { XCircleThinIcon } from "../thin/x-circle-thin.icon";

export const XCircleIcon = memo(function XCircle(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: XCircleBoldIcon,
      duotone: XCircleDuotoneIcon,
      fill: XCircleFillIcon,
      light: XCircleLightIcon,
      regular: XCircleRegularIcon,
      thin: XCircleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
