import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DatabaseBoldIcon } from "../bold/database-bold.icon";
import { DatabaseDuotoneIcon } from "../duotone/database-duotone.icon";
import { DatabaseFillIcon } from "../fill/database-fill.icon";
import { DatabaseLightIcon } from "../light/database-light.icon";
import { DatabaseRegularIcon } from "../regular/database-regular.icon";
import { DatabaseThinIcon } from "../thin/database-thin.icon";

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
