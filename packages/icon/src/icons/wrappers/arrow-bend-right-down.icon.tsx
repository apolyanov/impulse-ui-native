import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowBendRightDownBoldIcon } from "../bold";
import { ArrowBendRightDownDuotoneIcon } from "../duotone";
import { ArrowBendRightDownFillIcon } from "../fill";
import { ArrowBendRightDownLightIcon } from "../light";
import { ArrowBendRightDownRegularIcon } from "../regular";
import { ArrowBendRightDownThinIcon } from "../thin";

export const ArrowBendRightDownIcon = memo(function ArrowBendRightDown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowBendRightDownBoldIcon,
      duotone: ArrowBendRightDownDuotoneIcon,
      fill: ArrowBendRightDownFillIcon,
      light: ArrowBendRightDownLightIcon,
      regular: ArrowBendRightDownRegularIcon,
      thin: ArrowBendRightDownThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
