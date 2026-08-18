import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TrolleySuitcaseBoldIcon } from "../bold/trolley-suitcase-bold.icon";
import { TrolleySuitcaseDuotoneIcon } from "../duotone/trolley-suitcase-duotone.icon";
import { TrolleySuitcaseFillIcon } from "../fill/trolley-suitcase-fill.icon";
import { TrolleySuitcaseLightIcon } from "../light/trolley-suitcase-light.icon";
import { TrolleySuitcaseRegularIcon } from "../regular/trolley-suitcase-regular.icon";
import { TrolleySuitcaseThinIcon } from "../thin/trolley-suitcase-thin.icon";

export const TrolleySuitcaseIcon = memo(function TrolleySuitcase(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TrolleySuitcaseBoldIcon,
      duotone: TrolleySuitcaseDuotoneIcon,
      fill: TrolleySuitcaseFillIcon,
      light: TrolleySuitcaseLightIcon,
      regular: TrolleySuitcaseRegularIcon,
      thin: TrolleySuitcaseThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
