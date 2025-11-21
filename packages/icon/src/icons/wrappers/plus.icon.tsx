import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PlusBoldIcon } from "../bold";
import { PlusDuotoneIcon } from "../duotone";
import { PlusFillIcon } from "../fill";
import { PlusLightIcon } from "../light";
import { PlusRegularIcon } from "../regular";
import { PlusThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
