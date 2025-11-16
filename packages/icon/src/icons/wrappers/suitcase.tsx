import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SuitcaseBold } from "../bold";
import { SuitcaseDuotone } from "../duotone";
import { SuitcaseFill } from "../fill";
import { SuitcaseLight } from "../light";
import { SuitcaseRegular } from "../regular";
import { SuitcaseThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Suitcase = memo(function Suitcase(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SuitcaseBold,
      duotone: SuitcaseDuotone,
      fill: SuitcaseFill,
      light: SuitcaseLight,
      regular: SuitcaseRegular,
      thin: SuitcaseThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
