import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CraneBoldIcon } from "../bold/crane-bold.icon";
import { CraneDuotoneIcon } from "../duotone/crane-duotone.icon";
import { CraneFillIcon } from "../fill/crane-fill.icon";
import { CraneLightIcon } from "../light/crane-light.icon";
import { CraneRegularIcon } from "../regular/crane-regular.icon";
import { CraneThinIcon } from "../thin/crane-thin.icon";

export const CraneIcon = memo(function Crane(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CraneBoldIcon,
      duotone: CraneDuotoneIcon,
      fill: CraneFillIcon,
      light: CraneLightIcon,
      regular: CraneRegularIcon,
      thin: CraneThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
