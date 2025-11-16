import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BugBeetleBold } from "../bold";
import { BugBeetleDuotone } from "../duotone";
import { BugBeetleFill } from "../fill";
import { BugBeetleLight } from "../light";
import { BugBeetleRegular } from "../regular";
import { BugBeetleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BugBeetle = memo(function BugBeetle(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BugBeetleBold,
      duotone: BugBeetleDuotone,
      fill: BugBeetleFill,
      light: BugBeetleLight,
      regular: BugBeetleRegular,
      thin: BugBeetleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
