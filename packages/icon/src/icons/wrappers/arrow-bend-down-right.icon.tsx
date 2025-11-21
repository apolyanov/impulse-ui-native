import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowBendDownRightBoldIcon } from "../bold";
import { ArrowBendDownRightDuotoneIcon } from "../duotone";
import { ArrowBendDownRightFillIcon } from "../fill";
import { ArrowBendDownRightLightIcon } from "../light";
import { ArrowBendDownRightRegularIcon } from "../regular";
import { ArrowBendDownRightThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowBendDownRightIcon = memo(function ArrowBendDownRight(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowBendDownRightBoldIcon,
      duotone: ArrowBendDownRightDuotoneIcon,
      fill: ArrowBendDownRightFillIcon,
      light: ArrowBendDownRightLightIcon,
      regular: ArrowBendDownRightRegularIcon,
      thin: ArrowBendDownRightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
