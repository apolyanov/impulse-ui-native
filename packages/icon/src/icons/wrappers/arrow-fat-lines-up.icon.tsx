import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowFatLinesUpBoldIcon } from "../bold";
import { ArrowFatLinesUpDuotoneIcon } from "../duotone";
import { ArrowFatLinesUpFillIcon } from "../fill";
import { ArrowFatLinesUpLightIcon } from "../light";
import { ArrowFatLinesUpRegularIcon } from "../regular";
import { ArrowFatLinesUpThinIcon } from "../thin";

export const ArrowFatLinesUpIcon = memo(function ArrowFatLinesUp(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowFatLinesUpBoldIcon,
      duotone: ArrowFatLinesUpDuotoneIcon,
      fill: ArrowFatLinesUpFillIcon,
      light: ArrowFatLinesUpLightIcon,
      regular: ArrowFatLinesUpRegularIcon,
      thin: ArrowFatLinesUpThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
