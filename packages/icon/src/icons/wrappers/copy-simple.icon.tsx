import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CopySimpleBoldIcon } from "../bold/copy-simple-bold.icon";
import { CopySimpleDuotoneIcon } from "../duotone/copy-simple-duotone.icon";
import { CopySimpleFillIcon } from "../fill/copy-simple-fill.icon";
import { CopySimpleLightIcon } from "../light/copy-simple-light.icon";
import { CopySimpleRegularIcon } from "../regular/copy-simple-regular.icon";
import { CopySimpleThinIcon } from "../thin/copy-simple-thin.icon";

export const CopySimpleIcon = memo(function CopySimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CopySimpleBoldIcon,
      duotone: CopySimpleDuotoneIcon,
      fill: CopySimpleFillIcon,
      light: CopySimpleLightIcon,
      regular: CopySimpleRegularIcon,
      thin: CopySimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
