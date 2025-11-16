import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowSquareOutBold } from "../bold";
import { ArrowSquareOutDuotone } from "../duotone";
import { ArrowSquareOutFill } from "../fill";
import { ArrowSquareOutLight } from "../light";
import { ArrowSquareOutRegular } from "../regular";
import { ArrowSquareOutThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowSquareOut = memo(function ArrowSquareOut(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowSquareOutBold,
      duotone: ArrowSquareOutDuotone,
      fill: ArrowSquareOutFill,
      light: ArrowSquareOutLight,
      regular: ArrowSquareOutRegular,
      thin: ArrowSquareOutThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
