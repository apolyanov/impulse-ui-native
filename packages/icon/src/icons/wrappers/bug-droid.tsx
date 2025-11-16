import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BugDroidBold } from "../bold";
import { BugDroidDuotone } from "../duotone";
import { BugDroidFill } from "../fill";
import { BugDroidLight } from "../light";
import { BugDroidRegular } from "../regular";
import { BugDroidThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BugDroid = memo(function BugDroid(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BugDroidBold,
      duotone: BugDroidDuotone,
      fill: BugDroidFill,
      light: BugDroidLight,
      regular: BugDroidRegular,
      thin: BugDroidThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
