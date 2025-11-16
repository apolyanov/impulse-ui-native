import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CloudCheckBold } from "../bold";
import { CloudCheckDuotone } from "../duotone";
import { CloudCheckFill } from "../fill";
import { CloudCheckLight } from "../light";
import { CloudCheckRegular } from "../regular";
import { CloudCheckThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CloudCheck = memo(function CloudCheck(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CloudCheckBold,
      duotone: CloudCheckDuotone,
      fill: CloudCheckFill,
      light: CloudCheckLight,
      regular: CloudCheckRegular,
      thin: CloudCheckThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
