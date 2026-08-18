import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SyringeBoldIcon } from "../bold/syringe-bold.icon";
import { SyringeDuotoneIcon } from "../duotone/syringe-duotone.icon";
import { SyringeFillIcon } from "../fill/syringe-fill.icon";
import { SyringeLightIcon } from "../light/syringe-light.icon";
import { SyringeRegularIcon } from "../regular/syringe-regular.icon";
import { SyringeThinIcon } from "../thin/syringe-thin.icon";

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
