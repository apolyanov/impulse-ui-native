import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowUpBoldIcon } from "../bold";
import { ArrowUpDuotoneIcon } from "../duotone";
import { ArrowUpFillIcon } from "../fill";
import { ArrowUpLightIcon } from "../light";
import { ArrowUpRegularIcon } from "../regular";
import { ArrowUpThinIcon } from "../thin";

export const ArrowUpIcon = memo(function ArrowUp(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowUpBoldIcon,
      duotone: ArrowUpDuotoneIcon,
      fill: ArrowUpFillIcon,
      light: ArrowUpLightIcon,
      regular: ArrowUpRegularIcon,
      thin: ArrowUpThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
