import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { RacquetBoldIcon } from "../bold";
import { RacquetDuotoneIcon } from "../duotone";
import { RacquetFillIcon } from "../fill";
import { RacquetLightIcon } from "../light";
import { RacquetRegularIcon } from "../regular";
import { RacquetThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const RacquetIcon = memo(function Racquet(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RacquetBoldIcon,
      duotone: RacquetDuotoneIcon,
      fill: RacquetFillIcon,
      light: RacquetLightIcon,
      regular: RacquetRegularIcon,
      thin: RacquetThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
