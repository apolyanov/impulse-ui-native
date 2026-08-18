import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SuitcaseBoldIcon } from "../bold/suitcase-bold.icon";
import { SuitcaseDuotoneIcon } from "../duotone/suitcase-duotone.icon";
import { SuitcaseFillIcon } from "../fill/suitcase-fill.icon";
import { SuitcaseLightIcon } from "../light/suitcase-light.icon";
import { SuitcaseRegularIcon } from "../regular/suitcase-regular.icon";
import { SuitcaseThinIcon } from "../thin/suitcase-thin.icon";

export const SuitcaseIcon = memo(function Suitcase(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SuitcaseBoldIcon,
      duotone: SuitcaseDuotoneIcon,
      fill: SuitcaseFillIcon,
      light: SuitcaseLightIcon,
      regular: SuitcaseRegularIcon,
      thin: SuitcaseThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
