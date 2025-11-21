import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowSquareOutBoldIcon } from "../bold";
import { ArrowSquareOutDuotoneIcon } from "../duotone";
import { ArrowSquareOutFillIcon } from "../fill";
import { ArrowSquareOutLightIcon } from "../light";
import { ArrowSquareOutRegularIcon } from "../regular";
import { ArrowSquareOutThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowSquareOutIcon = memo(function ArrowSquareOut(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowSquareOutBoldIcon,
      duotone: ArrowSquareOutDuotoneIcon,
      fill: ArrowSquareOutFillIcon,
      light: ArrowSquareOutLightIcon,
      regular: ArrowSquareOutRegularIcon,
      thin: ArrowSquareOutThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
