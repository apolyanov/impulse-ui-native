import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowBendRightUpBoldIcon } from "../bold";
import { ArrowBendRightUpDuotoneIcon } from "../duotone";
import { ArrowBendRightUpFillIcon } from "../fill";
import { ArrowBendRightUpLightIcon } from "../light";
import { ArrowBendRightUpRegularIcon } from "../regular";
import { ArrowBendRightUpThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowBendRightUpIcon = memo(function ArrowBendRightUp(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowBendRightUpBoldIcon,
      duotone: ArrowBendRightUpDuotoneIcon,
      fill: ArrowBendRightUpFillIcon,
      light: ArrowBendRightUpLightIcon,
      regular: ArrowBendRightUpRegularIcon,
      thin: ArrowBendRightUpThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
