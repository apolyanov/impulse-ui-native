import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CrownSimpleBold } from "../bold";
import { CrownSimpleDuotone } from "../duotone";
import { CrownSimpleFill } from "../fill";
import { CrownSimpleLight } from "../light";
import { CrownSimpleRegular } from "../regular";
import { CrownSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CrownSimple = memo(function CrownSimple(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CrownSimpleBold,
      duotone: CrownSimpleDuotone,
      fill: CrownSimpleFill,
      light: CrownSimpleLight,
      regular: CrownSimpleRegular,
      thin: CrownSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
