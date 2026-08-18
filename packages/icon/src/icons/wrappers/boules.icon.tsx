import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BoulesBoldIcon } from "../bold/boules-bold.icon";
import { BoulesDuotoneIcon } from "../duotone/boules-duotone.icon";
import { BoulesFillIcon } from "../fill/boules-fill.icon";
import { BoulesLightIcon } from "../light/boules-light.icon";
import { BoulesRegularIcon } from "../regular/boules-regular.icon";
import { BoulesThinIcon } from "../thin/boules-thin.icon";

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
