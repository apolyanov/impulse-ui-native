import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HandbagBold } from "../bold";
import { HandbagDuotone } from "../duotone";
import { HandbagFill } from "../fill";
import { HandbagLight } from "../light";
import { HandbagRegular } from "../regular";
import { HandbagThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Handbag = memo(function Handbag(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HandbagBold,
      duotone: HandbagDuotone,
      fill: HandbagFill,
      light: HandbagLight,
      regular: HandbagRegular,
      thin: HandbagThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
