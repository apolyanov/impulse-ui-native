import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PersonBold } from "../bold";
import { PersonDuotone } from "../duotone";
import { PersonFill } from "../fill";
import { PersonLight } from "../light";
import { PersonRegular } from "../regular";
import { PersonThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Person = memo(function Person(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PersonBold,
      duotone: PersonDuotone,
      fill: PersonFill,
      light: PersonLight,
      regular: PersonRegular,
      thin: PersonThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
