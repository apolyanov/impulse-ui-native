import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SwordBoldIcon } from "../bold/sword-bold.icon";
import { SwordDuotoneIcon } from "../duotone/sword-duotone.icon";
import { SwordFillIcon } from "../fill/sword-fill.icon";
import { SwordLightIcon } from "../light/sword-light.icon";
import { SwordRegularIcon } from "../regular/sword-regular.icon";
import { SwordThinIcon } from "../thin/sword-thin.icon";

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
