import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PersonSimpleRunBoldIcon } from "../bold";
import { PersonSimpleRunDuotoneIcon } from "../duotone";
import { PersonSimpleRunFillIcon } from "../fill";
import { PersonSimpleRunLightIcon } from "../light";
import { PersonSimpleRunRegularIcon } from "../regular";
import { PersonSimpleRunThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PersonSimpleRunIcon = memo(function PersonSimpleRun(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PersonSimpleRunBoldIcon,
      duotone: PersonSimpleRunDuotoneIcon,
      fill: PersonSimpleRunFillIcon,
      light: PersonSimpleRunLightIcon,
      regular: PersonSimpleRunRegularIcon,
      thin: PersonSimpleRunThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
