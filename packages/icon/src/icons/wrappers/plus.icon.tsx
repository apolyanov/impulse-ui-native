import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PlusBoldIcon } from "../bold/plus-bold.icon";
import { PlusDuotoneIcon } from "../duotone/plus-duotone.icon";
import { PlusFillIcon } from "../fill/plus-fill.icon";
import { PlusLightIcon } from "../light/plus-light.icon";
import { PlusRegularIcon } from "../regular/plus-regular.icon";
import { PlusThinIcon } from "../thin/plus-thin.icon";

export const PlusIcon = memo(function Plus(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PlusBoldIcon,
      duotone: PlusDuotoneIcon,
      fill: PlusFillIcon,
      light: PlusLightIcon,
      regular: PlusRegularIcon,
      thin: PlusThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
