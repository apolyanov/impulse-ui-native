import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PersonSimpleSwimBold } from "../bold";
import { PersonSimpleSwimDuotone } from "../duotone";
import { PersonSimpleSwimFill } from "../fill";
import { PersonSimpleSwimLight } from "../light";
import { PersonSimpleSwimRegular } from "../regular";
import { PersonSimpleSwimThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PersonSimpleSwim = memo(function PersonSimpleSwim(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PersonSimpleSwimBold,
      duotone: PersonSimpleSwimDuotone,
      fill: PersonSimpleSwimFill,
      light: PersonSimpleSwimLight,
      regular: PersonSimpleSwimRegular,
      thin: PersonSimpleSwimThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
