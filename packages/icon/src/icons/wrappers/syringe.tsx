import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SyringeBold } from "../bold";
import { SyringeDuotone } from "../duotone";
import { SyringeFill } from "../fill";
import { SyringeLight } from "../light";
import { SyringeRegular } from "../regular";
import { SyringeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Syringe = memo(function Syringe(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SyringeBold,
      duotone: SyringeDuotone,
      fill: SyringeFill,
      light: SyringeLight,
      regular: SyringeRegular,
      thin: SyringeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
