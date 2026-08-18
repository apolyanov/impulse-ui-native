import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PentagramBoldIcon } from "../bold/pentagram-bold.icon";
import { PentagramDuotoneIcon } from "../duotone/pentagram-duotone.icon";
import { PentagramFillIcon } from "../fill/pentagram-fill.icon";
import { PentagramLightIcon } from "../light/pentagram-light.icon";
import { PentagramRegularIcon } from "../regular/pentagram-regular.icon";
import { PentagramThinIcon } from "../thin/pentagram-thin.icon";

export const PentagramIcon = memo(function Pentagram(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PentagramBoldIcon,
      duotone: PentagramDuotoneIcon,
      fill: PentagramFillIcon,
      light: PentagramLightIcon,
      regular: PentagramRegularIcon,
      thin: PentagramThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
