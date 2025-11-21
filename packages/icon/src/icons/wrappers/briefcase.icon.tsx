import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BriefcaseBoldIcon } from "../bold";
import { BriefcaseDuotoneIcon } from "../duotone";
import { BriefcaseFillIcon } from "../fill";
import { BriefcaseLightIcon } from "../light";
import { BriefcaseRegularIcon } from "../regular";
import { BriefcaseThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BriefcaseIcon = memo(function Briefcase(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BriefcaseBoldIcon,
      duotone: BriefcaseDuotoneIcon,
      fill: BriefcaseFillIcon,
      light: BriefcaseLightIcon,
      regular: BriefcaseRegularIcon,
      thin: BriefcaseThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
