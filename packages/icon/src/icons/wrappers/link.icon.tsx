import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LinkBoldIcon } from "../bold/link-bold.icon";
import { LinkDuotoneIcon } from "../duotone/link-duotone.icon";
import { LinkFillIcon } from "../fill/link-fill.icon";
import { LinkLightIcon } from "../light/link-light.icon";
import { LinkRegularIcon } from "../regular/link-regular.icon";
import { LinkThinIcon } from "../thin/link-thin.icon";

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
