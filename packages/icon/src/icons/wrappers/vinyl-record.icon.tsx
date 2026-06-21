import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { VinylRecordBoldIcon } from "../bold";
import { VinylRecordDuotoneIcon } from "../duotone";
import { VinylRecordFillIcon } from "../fill";
import { VinylRecordLightIcon } from "../light";
import { VinylRecordRegularIcon } from "../regular";
import { VinylRecordThinIcon } from "../thin";

export const VinylRecordIcon = memo(function VinylRecord(
  props: IconWrapperProps,
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
