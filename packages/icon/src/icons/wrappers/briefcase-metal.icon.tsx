import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BriefcaseMetalBoldIcon } from "../bold";
import { BriefcaseMetalDuotoneIcon } from "../duotone";
import { BriefcaseMetalFillIcon } from "../fill";
import { BriefcaseMetalLightIcon } from "../light";
import { BriefcaseMetalRegularIcon } from "../regular";
import { BriefcaseMetalThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BriefcaseMetalIcon = memo(function BriefcaseMetal(
  props: IconWrapperProps
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
