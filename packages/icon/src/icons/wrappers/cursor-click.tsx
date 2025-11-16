import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CursorClickBold } from "../bold";
import { CursorClickDuotone } from "../duotone";
import { CursorClickFill } from "../fill";
import { CursorClickLight } from "../light";
import { CursorClickRegular } from "../regular";
import { CursorClickThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CursorClick = memo(function CursorClick(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CursorClickBold,
      duotone: CursorClickDuotone,
      fill: CursorClickFill,
      light: CursorClickLight,
      regular: CursorClickRegular,
      thin: CursorClickThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
