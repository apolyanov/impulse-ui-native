import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MegaphoneSimpleBoldIcon } from "../bold/megaphone-simple-bold.icon";
import { MegaphoneSimpleDuotoneIcon } from "../duotone/megaphone-simple-duotone.icon";
import { MegaphoneSimpleFillIcon } from "../fill/megaphone-simple-fill.icon";
import { MegaphoneSimpleLightIcon } from "../light/megaphone-simple-light.icon";
import { MegaphoneSimpleRegularIcon } from "../regular/megaphone-simple-regular.icon";
import { MegaphoneSimpleThinIcon } from "../thin/megaphone-simple-thin.icon";

export const MegaphoneSimpleIcon = memo(function MegaphoneSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MegaphoneSimpleBoldIcon,
      duotone: MegaphoneSimpleDuotoneIcon,
      fill: MegaphoneSimpleFillIcon,
      light: MegaphoneSimpleLightIcon,
      regular: MegaphoneSimpleRegularIcon,
      thin: MegaphoneSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
