import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BugDroidBoldIcon } from "../bold/bug-droid-bold.icon";
import { BugDroidDuotoneIcon } from "../duotone/bug-droid-duotone.icon";
import { BugDroidFillIcon } from "../fill/bug-droid-fill.icon";
import { BugDroidLightIcon } from "../light/bug-droid-light.icon";
import { BugDroidRegularIcon } from "../regular/bug-droid-regular.icon";
import { BugDroidThinIcon } from "../thin/bug-droid-thin.icon";

export const BugDroidIcon = memo(function BugDroid(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BugDroidBoldIcon,
      duotone: BugDroidDuotoneIcon,
      fill: BugDroidFillIcon,
      light: BugDroidLightIcon,
      regular: BugDroidRegularIcon,
      thin: BugDroidThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
