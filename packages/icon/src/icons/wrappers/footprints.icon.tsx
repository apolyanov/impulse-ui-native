import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FootprintsBoldIcon } from "../bold";
import { FootprintsDuotoneIcon } from "../duotone";
import { FootprintsFillIcon } from "../fill";
import { FootprintsLightIcon } from "../light";
import { FootprintsRegularIcon } from "../regular";
import { FootprintsThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FootprintsIcon = memo(function Footprints(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FootprintsBoldIcon,
      duotone: FootprintsDuotoneIcon,
      fill: FootprintsFillIcon,
      light: FootprintsLightIcon,
      regular: FootprintsRegularIcon,
      thin: FootprintsThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
