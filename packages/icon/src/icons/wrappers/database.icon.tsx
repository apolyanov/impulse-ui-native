import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DatabaseBoldIcon } from "../bold";
import { DatabaseDuotoneIcon } from "../duotone";
import { DatabaseFillIcon } from "../fill";
import { DatabaseLightIcon } from "../light";
import { DatabaseRegularIcon } from "../regular";
import { DatabaseThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DatabaseIcon = memo(function Database(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DatabaseBoldIcon,
      duotone: DatabaseDuotoneIcon,
      fill: DatabaseFillIcon,
      light: DatabaseLightIcon,
      regular: DatabaseRegularIcon,
      thin: DatabaseThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
