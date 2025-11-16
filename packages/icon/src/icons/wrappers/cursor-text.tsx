import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CursorTextBold } from "../bold";
import { CursorTextDuotone } from "../duotone";
import { CursorTextFill } from "../fill";
import { CursorTextLight } from "../light";
import { CursorTextRegular } from "../regular";
import { CursorTextThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CursorText = memo(function CursorText(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CursorTextBold,
      duotone: CursorTextDuotone,
      fill: CursorTextFill,
      light: CursorTextLight,
      regular: CursorTextRegular,
      thin: CursorTextThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
