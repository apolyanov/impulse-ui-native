import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BriefcaseMetalBoldIcon } from "../bold/briefcase-metal-bold.icon";
import { BriefcaseMetalDuotoneIcon } from "../duotone/briefcase-metal-duotone.icon";
import { BriefcaseMetalFillIcon } from "../fill/briefcase-metal-fill.icon";
import { BriefcaseMetalLightIcon } from "../light/briefcase-metal-light.icon";
import { BriefcaseMetalRegularIcon } from "../regular/briefcase-metal-regular.icon";
import { BriefcaseMetalThinIcon } from "../thin/briefcase-metal-thin.icon";

export const BriefcaseMetalIcon = memo(function BriefcaseMetal(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BriefcaseMetalBoldIcon,
      duotone: BriefcaseMetalDuotoneIcon,
      fill: BriefcaseMetalFillIcon,
      light: BriefcaseMetalLightIcon,
      regular: BriefcaseMetalRegularIcon,
      thin: BriefcaseMetalThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
