import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { RacquetBold } from "../bold";
import { RacquetDuotone } from "../duotone";
import { RacquetFill } from "../fill";
import { RacquetLight } from "../light";
import { RacquetRegular } from "../regular";
import { RacquetThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Racquet = memo(function Racquet(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RacquetBold,
      duotone: RacquetDuotone,
      fill: RacquetFill,
      light: RacquetLight,
      regular: RacquetRegular,
      thin: RacquetThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
