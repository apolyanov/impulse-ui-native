import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowSquareOutBoldIcon } from "../bold/arrow-square-out-bold.icon";
import { ArrowSquareOutDuotoneIcon } from "../duotone/arrow-square-out-duotone.icon";
import { ArrowSquareOutFillIcon } from "../fill/arrow-square-out-fill.icon";
import { ArrowSquareOutLightIcon } from "../light/arrow-square-out-light.icon";
import { ArrowSquareOutRegularIcon } from "../regular/arrow-square-out-regular.icon";
import { ArrowSquareOutThinIcon } from "../thin/arrow-square-out-thin.icon";

export const ArrowSquareOutIcon = memo(function ArrowSquareOut(
  props: IconWrapperProps,
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
