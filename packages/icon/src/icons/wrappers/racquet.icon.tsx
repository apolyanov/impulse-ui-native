import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { RacquetBoldIcon } from "../bold/racquet-bold.icon";
import { RacquetDuotoneIcon } from "../duotone/racquet-duotone.icon";
import { RacquetFillIcon } from "../fill/racquet-fill.icon";
import { RacquetLightIcon } from "../light/racquet-light.icon";
import { RacquetRegularIcon } from "../regular/racquet-regular.icon";
import { RacquetThinIcon } from "../thin/racquet-thin.icon";

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
