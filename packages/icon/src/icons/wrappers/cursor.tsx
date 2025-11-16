import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CursorBold } from "../bold";
import { CursorDuotone } from "../duotone";
import { CursorFill } from "../fill";
import { CursorLight } from "../light";
import { CursorRegular } from "../regular";
import { CursorThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Cursor = memo(function Cursor(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CursorBold,
      duotone: CursorDuotone,
      fill: CursorFill,
      light: CursorLight,
      regular: CursorRegular,
      thin: CursorThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
