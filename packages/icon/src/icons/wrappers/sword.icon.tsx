import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SwordBoldIcon } from "../bold";
import { SwordDuotoneIcon } from "../duotone";
import { SwordFillIcon } from "../fill";
import { SwordLightIcon } from "../light";
import { SwordRegularIcon } from "../regular";
import { SwordThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SwordIcon = memo(function Sword(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SwordBoldIcon,
      duotone: SwordDuotoneIcon,
      fill: SwordFillIcon,
      light: SwordLightIcon,
      regular: SwordRegularIcon,
      thin: SwordThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
