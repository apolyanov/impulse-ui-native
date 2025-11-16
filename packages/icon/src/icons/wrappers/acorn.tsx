import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AcornBold } from "../bold";
import { AcornDuotone } from "../duotone";
import { AcornFill } from "../fill";
import { AcornLight } from "../light";
import { AcornRegular } from "../regular";
import { AcornThin } from "../thin";

export const Acorn = memo(function Acorn(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AcornBold,
      duotone: AcornDuotone,
      fill: AcornFill,
      light: AcornLight,
      regular: AcornRegular,
      thin: AcornThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
