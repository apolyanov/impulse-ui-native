import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SigmaBoldIcon } from "../bold/sigma-bold.icon";
import { SigmaDuotoneIcon } from "../duotone/sigma-duotone.icon";
import { SigmaFillIcon } from "../fill/sigma-fill.icon";
import { SigmaLightIcon } from "../light/sigma-light.icon";
import { SigmaRegularIcon } from "../regular/sigma-regular.icon";
import { SigmaThinIcon } from "../thin/sigma-thin.icon";

export const SigmaIcon = memo(function Sigma(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SigmaBoldIcon,
      duotone: SigmaDuotoneIcon,
      fill: SigmaFillIcon,
      light: SigmaLightIcon,
      regular: SigmaRegularIcon,
      thin: SigmaThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
