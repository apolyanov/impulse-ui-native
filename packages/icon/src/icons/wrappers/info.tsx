import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { InfoBold } from "../bold";
import { InfoDuotone } from "../duotone";
import { InfoFill } from "../fill";
import { InfoLight } from "../light";
import { InfoRegular } from "../regular";
import { InfoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Info = memo(function Info(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: InfoBold,
      duotone: InfoDuotone,
      fill: InfoFill,
      light: InfoLight,
      regular: InfoRegular,
      thin: InfoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
