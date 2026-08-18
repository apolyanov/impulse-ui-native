import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CopyBoldIcon } from "../bold/copy-bold.icon";
import { CopyDuotoneIcon } from "../duotone/copy-duotone.icon";
import { CopyFillIcon } from "../fill/copy-fill.icon";
import { CopyLightIcon } from "../light/copy-light.icon";
import { CopyRegularIcon } from "../regular/copy-regular.icon";
import { CopyThinIcon } from "../thin/copy-thin.icon";

export const CopyIcon = memo(function Copy(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CopyBoldIcon,
      duotone: CopyDuotoneIcon,
      fill: CopyFillIcon,
      light: CopyLightIcon,
      regular: CopyRegularIcon,
      thin: CopyThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
