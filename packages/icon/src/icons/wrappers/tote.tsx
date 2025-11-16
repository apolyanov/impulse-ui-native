import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ToteBold } from "../bold";
import { ToteDuotone } from "../duotone";
import { ToteFill } from "../fill";
import { ToteLight } from "../light";
import { ToteRegular } from "../regular";
import { ToteThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Tote = memo(function Tote(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ToteBold,
      duotone: ToteDuotone,
      fill: ToteFill,
      light: ToteLight,
      regular: ToteRegular,
      thin: ToteThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
