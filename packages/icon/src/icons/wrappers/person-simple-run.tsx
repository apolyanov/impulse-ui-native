import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PersonSimpleRunBold } from "../bold";
import { PersonSimpleRunDuotone } from "../duotone";
import { PersonSimpleRunFill } from "../fill";
import { PersonSimpleRunLight } from "../light";
import { PersonSimpleRunRegular } from "../regular";
import { PersonSimpleRunThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PersonSimpleRun = memo(function PersonSimpleRun(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PersonSimpleRunBold,
      duotone: PersonSimpleRunDuotone,
      fill: PersonSimpleRunFill,
      light: PersonSimpleRunLight,
      regular: PersonSimpleRunRegular,
      thin: PersonSimpleRunThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
