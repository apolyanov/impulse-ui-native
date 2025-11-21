import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowSquareDownBoldIcon } from "../bold";
import { ArrowSquareDownDuotoneIcon } from "../duotone";
import { ArrowSquareDownFillIcon } from "../fill";
import { ArrowSquareDownLightIcon } from "../light";
import { ArrowSquareDownRegularIcon } from "../regular";
import { ArrowSquareDownThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowSquareDownIcon = memo(function ArrowSquareDown(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowSquareDownBoldIcon,
      duotone: ArrowSquareDownDuotoneIcon,
      fill: ArrowSquareDownFillIcon,
      light: ArrowSquareDownLightIcon,
      regular: ArrowSquareDownRegularIcon,
      thin: ArrowSquareDownThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
