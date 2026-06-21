import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LighthouseBoldIcon } from "../bold";
import { LighthouseDuotoneIcon } from "../duotone";
import { LighthouseFillIcon } from "../fill";
import { LighthouseLightIcon } from "../light";
import { LighthouseRegularIcon } from "../regular";
import { LighthouseThinIcon } from "../thin";

export const LighthouseIcon = memo(function Lighthouse(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LighthouseBoldIcon,
      duotone: LighthouseDuotoneIcon,
      fill: LighthouseFillIcon,
      light: LighthouseLightIcon,
      regular: LighthouseRegularIcon,
      thin: LighthouseThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
