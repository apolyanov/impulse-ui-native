import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CheersBold } from "../bold";
import { CheersDuotone } from "../duotone";
import { CheersFill } from "../fill";
import { CheersLight } from "../light";
import { CheersRegular } from "../regular";
import { CheersThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Cheers = memo(function Cheers(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CheersBold,
      duotone: CheersDuotone,
      fill: CheersFill,
      light: CheersLight,
      regular: CheersRegular,
      thin: CheersThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
