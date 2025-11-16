import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LinkBreakBold } from "../bold";
import { LinkBreakDuotone } from "../duotone";
import { LinkBreakFill } from "../fill";
import { LinkBreakLight } from "../light";
import { LinkBreakRegular } from "../regular";
import { LinkBreakThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const LinkBreak = memo(function LinkBreak(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LinkBreakBold,
      duotone: LinkBreakDuotone,
      fill: LinkBreakFill,
      light: LinkBreakLight,
      regular: LinkBreakRegular,
      thin: LinkBreakThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
