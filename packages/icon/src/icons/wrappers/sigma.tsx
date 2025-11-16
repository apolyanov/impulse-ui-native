import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SigmaBold } from "../bold";
import { SigmaDuotone } from "../duotone";
import { SigmaFill } from "../fill";
import { SigmaLight } from "../light";
import { SigmaRegular } from "../regular";
import { SigmaThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Sigma = memo(function Sigma(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SigmaBold,
      duotone: SigmaDuotone,
      fill: SigmaFill,
      light: SigmaLight,
      regular: SigmaRegular,
      thin: SigmaThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
