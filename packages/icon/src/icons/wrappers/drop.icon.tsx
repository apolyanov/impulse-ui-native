import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DropBoldIcon } from "../bold/drop-bold.icon";
import { DropDuotoneIcon } from "../duotone/drop-duotone.icon";
import { DropFillIcon } from "../fill/drop-fill.icon";
import { DropLightIcon } from "../light/drop-light.icon";
import { DropRegularIcon } from "../regular/drop-regular.icon";
import { DropThinIcon } from "../thin/drop-thin.icon";

export const DropIcon = memo(function Drop(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DropBoldIcon,
      duotone: DropDuotoneIcon,
      fill: DropFillIcon,
      light: DropLightIcon,
      regular: DropRegularIcon,
      thin: DropThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
