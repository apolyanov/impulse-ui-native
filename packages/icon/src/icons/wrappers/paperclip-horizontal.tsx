import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PaperclipHorizontalBold } from "../bold";
import { PaperclipHorizontalDuotone } from "../duotone";
import { PaperclipHorizontalFill } from "../fill";
import { PaperclipHorizontalLight } from "../light";
import { PaperclipHorizontalRegular } from "../regular";
import { PaperclipHorizontalThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PaperclipHorizontal = memo(function PaperclipHorizontal(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PaperclipHorizontalBold,
      duotone: PaperclipHorizontalDuotone,
      fill: PaperclipHorizontalFill,
      light: PaperclipHorizontalLight,
      regular: PaperclipHorizontalRegular,
      thin: PaperclipHorizontalThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
