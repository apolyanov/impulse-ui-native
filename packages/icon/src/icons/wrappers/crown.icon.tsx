import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CrownBoldIcon } from "../bold/crown-bold.icon";
import { CrownDuotoneIcon } from "../duotone/crown-duotone.icon";
import { CrownFillIcon } from "../fill/crown-fill.icon";
import { CrownLightIcon } from "../light/crown-light.icon";
import { CrownRegularIcon } from "../regular/crown-regular.icon";
import { CrownThinIcon } from "../thin/crown-thin.icon";

export const CrownIcon = memo(function Crown(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CrownBoldIcon,
      duotone: CrownDuotoneIcon,
      fill: CrownFillIcon,
      light: CrownLightIcon,
      regular: CrownRegularIcon,
      thin: CrownThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
