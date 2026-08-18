import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LighthouseBoldIcon } from "../bold/lighthouse-bold.icon";
import { LighthouseDuotoneIcon } from "../duotone/lighthouse-duotone.icon";
import { LighthouseFillIcon } from "../fill/lighthouse-fill.icon";
import { LighthouseLightIcon } from "../light/lighthouse-light.icon";
import { LighthouseRegularIcon } from "../regular/lighthouse-regular.icon";
import { LighthouseThinIcon } from "../thin/lighthouse-thin.icon";

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
