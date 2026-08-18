import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { VinylRecordBoldIcon } from "../bold/vinyl-record-bold.icon";
import { VinylRecordDuotoneIcon } from "../duotone/vinyl-record-duotone.icon";
import { VinylRecordFillIcon } from "../fill/vinyl-record-fill.icon";
import { VinylRecordLightIcon } from "../light/vinyl-record-light.icon";
import { VinylRecordRegularIcon } from "../regular/vinyl-record-regular.icon";
import { VinylRecordThinIcon } from "../thin/vinyl-record-thin.icon";

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
