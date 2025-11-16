import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BriefcaseBold } from "../bold";
import { BriefcaseDuotone } from "../duotone";
import { BriefcaseFill } from "../fill";
import { BriefcaseLight } from "../light";
import { BriefcaseRegular } from "../regular";
import { BriefcaseThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Briefcase = memo(function Briefcase(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BriefcaseBold,
      duotone: BriefcaseDuotone,
      fill: BriefcaseFill,
      light: BriefcaseLight,
      regular: BriefcaseRegular,
      thin: BriefcaseThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
