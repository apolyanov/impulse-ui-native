import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BugBoldIcon } from "../bold/bug-bold.icon";
import { BugDuotoneIcon } from "../duotone/bug-duotone.icon";
import { BugFillIcon } from "../fill/bug-fill.icon";
import { BugLightIcon } from "../light/bug-light.icon";
import { BugRegularIcon } from "../regular/bug-regular.icon";
import { BugThinIcon } from "../thin/bug-thin.icon";

export const BugIcon = memo(function Bug(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BugBoldIcon,
      duotone: BugDuotoneIcon,
      fill: BugFillIcon,
      light: BugLightIcon,
      regular: BugRegularIcon,
      thin: BugThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
