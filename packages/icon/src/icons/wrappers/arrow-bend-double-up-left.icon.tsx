import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowBendDoubleUpLeftBoldIcon } from "../bold";
import { ArrowBendDoubleUpLeftDuotoneIcon } from "../duotone";
import { ArrowBendDoubleUpLeftFillIcon } from "../fill";
import { ArrowBendDoubleUpLeftLightIcon } from "../light";
import { ArrowBendDoubleUpLeftRegularIcon } from "../regular";
import { ArrowBendDoubleUpLeftThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowBendDoubleUpLeftIcon = memo(function ArrowBendDoubleUpLeft(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowBendDoubleUpLeftBoldIcon,
      duotone: ArrowBendDoubleUpLeftDuotoneIcon,
      fill: ArrowBendDoubleUpLeftFillIcon,
      light: ArrowBendDoubleUpLeftLightIcon,
      regular: ArrowBendDoubleUpLeftRegularIcon,
      thin: ArrowBendDoubleUpLeftThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
