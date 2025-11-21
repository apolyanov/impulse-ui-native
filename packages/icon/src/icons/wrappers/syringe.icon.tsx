import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SyringeBoldIcon } from "../bold";
import { SyringeDuotoneIcon } from "../duotone";
import { SyringeFillIcon } from "../fill";
import { SyringeLightIcon } from "../light";
import { SyringeRegularIcon } from "../regular";
import { SyringeThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SyringeIcon = memo(function Syringe(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SyringeBoldIcon,
      duotone: SyringeDuotoneIcon,
      fill: SyringeFillIcon,
      light: SyringeLightIcon,
      regular: SyringeRegularIcon,
      thin: SyringeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
