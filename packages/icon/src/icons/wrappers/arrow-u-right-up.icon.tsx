import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowURightUpBoldIcon } from "../bold";
import { ArrowURightUpDuotoneIcon } from "../duotone";
import { ArrowURightUpFillIcon } from "../fill";
import { ArrowURightUpLightIcon } from "../light";
import { ArrowURightUpRegularIcon } from "../regular";
import { ArrowURightUpThinIcon } from "../thin";

export const ArrowURightUpIcon = memo(function ArrowURightUp(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowURightUpBoldIcon,
      duotone: ArrowURightUpDuotoneIcon,
      fill: ArrowURightUpFillIcon,
      light: ArrowURightUpLightIcon,
      regular: ArrowURightUpRegularIcon,
      thin: ArrowURightUpThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
