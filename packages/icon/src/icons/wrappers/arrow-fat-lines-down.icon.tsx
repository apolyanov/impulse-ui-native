import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowFatLinesDownBoldIcon } from "../bold";
import { ArrowFatLinesDownDuotoneIcon } from "../duotone";
import { ArrowFatLinesDownFillIcon } from "../fill";
import { ArrowFatLinesDownLightIcon } from "../light";
import { ArrowFatLinesDownRegularIcon } from "../regular";
import { ArrowFatLinesDownThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowFatLinesDownIcon = memo(function ArrowFatLinesDown(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowFatLinesDownBoldIcon,
      duotone: ArrowFatLinesDownDuotoneIcon,
      fill: ArrowFatLinesDownFillIcon,
      light: ArrowFatLinesDownLightIcon,
      regular: ArrowFatLinesDownRegularIcon,
      thin: ArrowFatLinesDownThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
