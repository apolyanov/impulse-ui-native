import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowBendUpLeftBoldIcon } from "../bold";
import { ArrowBendUpLeftDuotoneIcon } from "../duotone";
import { ArrowBendUpLeftFillIcon } from "../fill";
import { ArrowBendUpLeftLightIcon } from "../light";
import { ArrowBendUpLeftRegularIcon } from "../regular";
import { ArrowBendUpLeftThinIcon } from "../thin";

export const ArrowBendUpLeftIcon = memo(function ArrowBendUpLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowBendUpLeftBoldIcon,
      duotone: ArrowBendUpLeftDuotoneIcon,
      fill: ArrowBendUpLeftFillIcon,
      light: ArrowBendUpLeftLightIcon,
      regular: ArrowBendUpLeftRegularIcon,
      thin: ArrowBendUpLeftThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
