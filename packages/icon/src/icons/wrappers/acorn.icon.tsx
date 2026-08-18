import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AcornBoldIcon } from "../bold/acorn-bold.icon";
import { AcornDuotoneIcon } from "../duotone/acorn-duotone.icon";
import { AcornFillIcon } from "../fill/acorn-fill.icon";
import { AcornLightIcon } from "../light/acorn-light.icon";
import { AcornRegularIcon } from "../regular/acorn-regular.icon";
import { AcornThinIcon } from "../thin/acorn-thin.icon";

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
