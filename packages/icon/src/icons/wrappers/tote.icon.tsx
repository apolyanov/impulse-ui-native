import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ToteBoldIcon } from "../bold";
import { ToteDuotoneIcon } from "../duotone";
import { ToteFillIcon } from "../fill";
import { ToteLightIcon } from "../light";
import { ToteRegularIcon } from "../regular";
import { ToteThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ToteIcon = memo(function Tote(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ToteBoldIcon,
      duotone: ToteDuotoneIcon,
      fill: ToteFillIcon,
      light: ToteLightIcon,
      regular: ToteRegularIcon,
      thin: ToteThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
