import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowUpBoldIcon } from "../bold/arrow-up-bold.icon";
import { ArrowUpDuotoneIcon } from "../duotone/arrow-up-duotone.icon";
import { ArrowUpFillIcon } from "../fill/arrow-up-fill.icon";
import { ArrowUpLightIcon } from "../light/arrow-up-light.icon";
import { ArrowUpRegularIcon } from "../regular/arrow-up-regular.icon";
import { ArrowUpThinIcon } from "../thin/arrow-up-thin.icon";

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
