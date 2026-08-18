import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BriefcaseBoldIcon } from "../bold/briefcase-bold.icon";
import { BriefcaseDuotoneIcon } from "../duotone/briefcase-duotone.icon";
import { BriefcaseFillIcon } from "../fill/briefcase-fill.icon";
import { BriefcaseLightIcon } from "../light/briefcase-light.icon";
import { BriefcaseRegularIcon } from "../regular/briefcase-regular.icon";
import { BriefcaseThinIcon } from "../thin/briefcase-thin.icon";

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
