import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TrolleySuitcaseBold } from "../bold";
import { TrolleySuitcaseDuotone } from "../duotone";
import { TrolleySuitcaseFill } from "../fill";
import { TrolleySuitcaseLight } from "../light";
import { TrolleySuitcaseRegular } from "../regular";
import { TrolleySuitcaseThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TrolleySuitcase = memo(function TrolleySuitcase(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TrolleySuitcaseBold,
      duotone: TrolleySuitcaseDuotone,
      fill: TrolleySuitcaseFill,
      light: TrolleySuitcaseLight,
      regular: TrolleySuitcaseRegular,
      thin: TrolleySuitcaseThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
