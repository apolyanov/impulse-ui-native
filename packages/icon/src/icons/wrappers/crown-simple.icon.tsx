import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CrownSimpleBoldIcon } from "../bold/crown-simple-bold.icon";
import { CrownSimpleDuotoneIcon } from "../duotone/crown-simple-duotone.icon";
import { CrownSimpleFillIcon } from "../fill/crown-simple-fill.icon";
import { CrownSimpleLightIcon } from "../light/crown-simple-light.icon";
import { CrownSimpleRegularIcon } from "../regular/crown-simple-regular.icon";
import { CrownSimpleThinIcon } from "../thin/crown-simple-thin.icon";

export const CrownSimpleIcon = memo(function CrownSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CrownSimpleBoldIcon,
      duotone: CrownSimpleDuotoneIcon,
      fill: CrownSimpleFillIcon,
      light: CrownSimpleLightIcon,
      regular: CrownSimpleRegularIcon,
      thin: CrownSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
