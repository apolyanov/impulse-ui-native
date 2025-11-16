import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AlignCenterHorizontalBold } from "../bold";
import { AlignCenterHorizontalDuotone } from "../duotone";
import { AlignCenterHorizontalFill } from "../fill";
import { AlignCenterHorizontalLight } from "../light";
import { AlignCenterHorizontalRegular } from "../regular";
import { AlignCenterHorizontalThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const AlignCenterHorizontal = memo(function AlignCenterHorizontal(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AlignCenterHorizontalBold,
      duotone: AlignCenterHorizontalDuotone,
      fill: AlignCenterHorizontalFill,
      light: AlignCenterHorizontalLight,
      regular: AlignCenterHorizontalRegular,
      thin: AlignCenterHorizontalThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
