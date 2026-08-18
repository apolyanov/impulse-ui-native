import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CherriesBoldIcon } from "../bold/cherries-bold.icon";
import { CherriesDuotoneIcon } from "../duotone/cherries-duotone.icon";
import { CherriesFillIcon } from "../fill/cherries-fill.icon";
import { CherriesLightIcon } from "../light/cherries-light.icon";
import { CherriesRegularIcon } from "../regular/cherries-regular.icon";
import { CherriesThinIcon } from "../thin/cherries-thin.icon";

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
