import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowULeftUpBoldIcon } from "../bold";
import { ArrowULeftUpDuotoneIcon } from "../duotone";
import { ArrowULeftUpFillIcon } from "../fill";
import { ArrowULeftUpLightIcon } from "../light";
import { ArrowULeftUpRegularIcon } from "../regular";
import { ArrowULeftUpThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowULeftUpIcon = memo(function ArrowULeftUp(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowULeftUpBoldIcon,
      duotone: ArrowULeftUpDuotoneIcon,
      fill: ArrowULeftUpFillIcon,
      light: ArrowULeftUpLightIcon,
      regular: ArrowULeftUpRegularIcon,
      thin: ArrowULeftUpThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
