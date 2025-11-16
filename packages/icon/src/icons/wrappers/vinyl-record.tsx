import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { VinylRecordBold } from "../bold";
import { VinylRecordDuotone } from "../duotone";
import { VinylRecordFill } from "../fill";
import { VinylRecordLight } from "../light";
import { VinylRecordRegular } from "../regular";
import { VinylRecordThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const VinylRecord = memo(function VinylRecord(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: VinylRecordBold,
      duotone: VinylRecordDuotone,
      fill: VinylRecordFill,
      light: VinylRecordLight,
      regular: VinylRecordRegular,
      thin: VinylRecordThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
