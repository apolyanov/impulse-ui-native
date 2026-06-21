import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BoulesBoldIcon } from "../bold";
import { BoulesDuotoneIcon } from "../duotone";
import { BoulesFillIcon } from "../fill";
import { BoulesLightIcon } from "../light";
import { BoulesRegularIcon } from "../regular";
import { BoulesThinIcon } from "../thin";

export const BoulesIcon = memo(function Boules(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BoulesBoldIcon,
      duotone: BoulesDuotoneIcon,
      fill: BoulesFillIcon,
      light: BoulesLightIcon,
      regular: BoulesRegularIcon,
      thin: BoulesThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
