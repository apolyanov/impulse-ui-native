import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ToteBoldIcon } from "../bold/tote-bold.icon";
import { ToteDuotoneIcon } from "../duotone/tote-duotone.icon";
import { ToteFillIcon } from "../fill/tote-fill.icon";
import { ToteLightIcon } from "../light/tote-light.icon";
import { ToteRegularIcon } from "../regular/tote-regular.icon";
import { ToteThinIcon } from "../thin/tote-thin.icon";

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
