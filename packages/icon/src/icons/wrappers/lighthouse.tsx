import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LighthouseBold } from "../bold";
import { LighthouseDuotone } from "../duotone";
import { LighthouseFill } from "../fill";
import { LighthouseLight } from "../light";
import { LighthouseRegular } from "../regular";
import { LighthouseThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Lighthouse = memo(function Lighthouse(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LighthouseBold,
      duotone: LighthouseDuotone,
      fill: LighthouseFill,
      light: LighthouseLight,
      regular: LighthouseRegular,
      thin: LighthouseThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
