import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CraneBoldIcon } from "../bold";
import { CraneDuotoneIcon } from "../duotone";
import { CraneFillIcon } from "../fill";
import { CraneLightIcon } from "../light";
import { CraneRegularIcon } from "../regular";
import { CraneThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
