import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BugBold } from "../bold";
import { BugDuotone } from "../duotone";
import { BugFill } from "../fill";
import { BugLight } from "../light";
import { BugRegular } from "../regular";
import { BugThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Bug = memo(function Bug(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BugBold,
      duotone: BugDuotone,
      fill: BugFill,
      light: BugLight,
      regular: BugRegular,
      thin: BugThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
