import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { RecordBoldIcon } from "../bold";
import { RecordDuotoneIcon } from "../duotone";
import { RecordFillIcon } from "../fill";
import { RecordLightIcon } from "../light";
import { RecordRegularIcon } from "../regular";
import { RecordThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const RecordIcon = memo(function Record(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RecordBoldIcon,
      duotone: RecordDuotoneIcon,
      fill: RecordFillIcon,
      light: RecordLightIcon,
      regular: RecordRegularIcon,
      thin: RecordThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
