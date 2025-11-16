import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FeatherBold } from "../bold";
import { FeatherDuotone } from "../duotone";
import { FeatherFill } from "../fill";
import { FeatherLight } from "../light";
import { FeatherRegular } from "../regular";
import { FeatherThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Feather = memo(function Feather(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FeatherBold,
      duotone: FeatherDuotone,
      fill: FeatherFill,
      light: FeatherLight,
      regular: FeatherRegular,
      thin: FeatherThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
