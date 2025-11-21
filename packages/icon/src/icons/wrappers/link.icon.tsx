import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LinkBoldIcon } from "../bold";
import { LinkDuotoneIcon } from "../duotone";
import { LinkFillIcon } from "../fill";
import { LinkLightIcon } from "../light";
import { LinkRegularIcon } from "../regular";
import { LinkThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const LinkIcon = memo(function Link(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LinkBoldIcon,
      duotone: LinkDuotoneIcon,
      fill: LinkFillIcon,
      light: LinkLightIcon,
      regular: LinkRegularIcon,
      thin: LinkThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
