import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { RecordBoldIcon } from "../bold/record-bold.icon";
import { RecordDuotoneIcon } from "../duotone/record-duotone.icon";
import { RecordFillIcon } from "../fill/record-fill.icon";
import { RecordLightIcon } from "../light/record-light.icon";
import { RecordRegularIcon } from "../regular/record-regular.icon";
import { RecordThinIcon } from "../thin/record-thin.icon";

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
