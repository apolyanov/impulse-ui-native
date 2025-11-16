import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AlignRightBold } from "../bold";
import { AlignRightDuotone } from "../duotone";
import { AlignRightFill } from "../fill";
import { AlignRightLight } from "../light";
import { AlignRightRegular } from "../regular";
import { AlignRightThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const AlignRight = memo(function AlignRight(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AlignRightBold,
      duotone: AlignRightDuotone,
      fill: AlignRightFill,
      light: AlignRightLight,
      regular: AlignRightRegular,
      thin: AlignRightThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
