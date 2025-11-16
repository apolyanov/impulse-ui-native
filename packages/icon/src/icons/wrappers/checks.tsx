import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChecksBold } from "../bold";
import { ChecksDuotone } from "../duotone";
import { ChecksFill } from "../fill";
import { ChecksLight } from "../light";
import { ChecksRegular } from "../regular";
import { ChecksThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Checks = memo(function Checks(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChecksBold,
      duotone: ChecksDuotone,
      fill: ChecksFill,
      light: ChecksLight,
      regular: ChecksRegular,
      thin: ChecksThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
