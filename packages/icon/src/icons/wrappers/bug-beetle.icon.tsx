import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BugBeetleBoldIcon } from "../bold/bug-beetle-bold.icon";
import { BugBeetleDuotoneIcon } from "../duotone/bug-beetle-duotone.icon";
import { BugBeetleFillIcon } from "../fill/bug-beetle-fill.icon";
import { BugBeetleLightIcon } from "../light/bug-beetle-light.icon";
import { BugBeetleRegularIcon } from "../regular/bug-beetle-regular.icon";
import { BugBeetleThinIcon } from "../thin/bug-beetle-thin.icon";

export const BugBeetleIcon = memo(function BugBeetle(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BugBeetleBoldIcon,
      duotone: BugBeetleDuotoneIcon,
      fill: BugBeetleFillIcon,
      light: BugBeetleLightIcon,
      regular: BugBeetleRegularIcon,
      thin: BugBeetleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
