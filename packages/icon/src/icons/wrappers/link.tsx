import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LinkBold } from "../bold";
import { LinkDuotone } from "../duotone";
import { LinkFill } from "../fill";
import { LinkLight } from "../light";
import { LinkRegular } from "../regular";
import { LinkThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Link = memo(function Link(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LinkBold,
      duotone: LinkDuotone,
      fill: LinkFill,
      light: LinkLight,
      regular: LinkRegular,
      thin: LinkThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
