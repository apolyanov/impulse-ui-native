import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CherriesBoldIcon } from "../bold";
import { CherriesDuotoneIcon } from "../duotone";
import { CherriesFillIcon } from "../fill";
import { CherriesLightIcon } from "../light";
import { CherriesRegularIcon } from "../regular";
import { CherriesThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CherriesIcon = memo(function Cherries(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CherriesBoldIcon,
      duotone: CherriesDuotoneIcon,
      fill: CherriesFillIcon,
      light: CherriesLightIcon,
      regular: CherriesRegularIcon,
      thin: CherriesThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
