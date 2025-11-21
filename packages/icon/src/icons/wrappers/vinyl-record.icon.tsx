import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { VinylRecordBoldIcon } from "../bold";
import { VinylRecordDuotoneIcon } from "../duotone";
import { VinylRecordFillIcon } from "../fill";
import { VinylRecordLightIcon } from "../light";
import { VinylRecordRegularIcon } from "../regular";
import { VinylRecordThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const VinylRecordIcon = memo(function VinylRecord(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: VinylRecordBoldIcon,
      duotone: VinylRecordDuotoneIcon,
      fill: VinylRecordFillIcon,
      light: VinylRecordLightIcon,
      regular: VinylRecordRegularIcon,
      thin: VinylRecordThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
