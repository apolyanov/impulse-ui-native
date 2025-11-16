import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CloudMoonBold } from "../bold";
import { CloudMoonDuotone } from "../duotone";
import { CloudMoonFill } from "../fill";
import { CloudMoonLight } from "../light";
import { CloudMoonRegular } from "../regular";
import { CloudMoonThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CloudMoon = memo(function CloudMoon(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CloudMoonBold,
      duotone: CloudMoonDuotone,
      fill: CloudMoonFill,
      light: CloudMoonLight,
      regular: CloudMoonRegular,
      thin: CloudMoonThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
