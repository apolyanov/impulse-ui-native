import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { RecordBold } from "../bold";
import { RecordDuotone } from "../duotone";
import { RecordFill } from "../fill";
import { RecordLight } from "../light";
import { RecordRegular } from "../regular";
import { RecordThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Record = memo(function Record(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RecordBold,
      duotone: RecordDuotone,
      fill: RecordFill,
      light: RecordLight,
      regular: RecordRegular,
      thin: RecordThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
