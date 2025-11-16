import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PlaceholderBold } from "../bold";
import { PlaceholderDuotone } from "../duotone";
import { PlaceholderFill } from "../fill";
import { PlaceholderLight } from "../light";
import { PlaceholderRegular } from "../regular";
import { PlaceholderThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Placeholder = memo(function Placeholder(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PlaceholderBold,
      duotone: PlaceholderDuotone,
      fill: PlaceholderFill,
      light: PlaceholderLight,
      regular: PlaceholderRegular,
      thin: PlaceholderThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
