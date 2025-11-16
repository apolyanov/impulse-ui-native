import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BriefcaseMetalBold } from "../bold";
import { BriefcaseMetalDuotone } from "../duotone";
import { BriefcaseMetalFill } from "../fill";
import { BriefcaseMetalLight } from "../light";
import { BriefcaseMetalRegular } from "../regular";
import { BriefcaseMetalThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BriefcaseMetal = memo(function BriefcaseMetal(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BriefcaseMetalBold,
      duotone: BriefcaseMetalDuotone,
      fill: BriefcaseMetalFill,
      light: BriefcaseMetalLight,
      regular: BriefcaseMetalRegular,
      thin: BriefcaseMetalThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
