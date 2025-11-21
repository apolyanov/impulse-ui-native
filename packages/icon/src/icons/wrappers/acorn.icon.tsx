import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AcornBoldIcon } from "../bold";
import { AcornDuotoneIcon } from "../duotone";
import { AcornFillIcon } from "../fill";
import { AcornLightIcon } from "../light";
import { AcornRegularIcon } from "../regular";
import { AcornThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const AcornIcon = memo(function Acorn(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AcornBoldIcon,
      duotone: AcornDuotoneIcon,
      fill: AcornFillIcon,
      light: AcornLightIcon,
      regular: AcornRegularIcon,
      thin: AcornThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
