import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DatabaseBold } from "../bold";
import { DatabaseDuotone } from "../duotone";
import { DatabaseFill } from "../fill";
import { DatabaseLight } from "../light";
import { DatabaseRegular } from "../regular";
import { DatabaseThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Database = memo(function Database(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DatabaseBold,
      duotone: DatabaseDuotone,
      fill: DatabaseFill,
      light: DatabaseLight,
      regular: DatabaseRegular,
      thin: DatabaseThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
