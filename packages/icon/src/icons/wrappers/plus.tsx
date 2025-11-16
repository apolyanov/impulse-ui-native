import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PlusBold } from "../bold";
import { PlusDuotone } from "../duotone";
import { PlusFill } from "../fill";
import { PlusLight } from "../light";
import { PlusRegular } from "../regular";
import { PlusThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Plus = memo(function Plus(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PlusBold,
      duotone: PlusDuotone,
      fill: PlusFill,
      light: PlusLight,
      regular: PlusRegular,
      thin: PlusThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
