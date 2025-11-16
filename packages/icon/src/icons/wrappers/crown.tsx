import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CrownBold } from "../bold";
import { CrownDuotone } from "../duotone";
import { CrownFill } from "../fill";
import { CrownLight } from "../light";
import { CrownRegular } from "../regular";
import { CrownThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Crown = memo(function Crown(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CrownBold,
      duotone: CrownDuotone,
      fill: CrownFill,
      light: CrownLight,
      regular: CrownRegular,
      thin: CrownThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
