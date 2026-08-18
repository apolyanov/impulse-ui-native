import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TextTSlashBoldIcon } from "../bold/text-t-slash-bold.icon";
import { TextTSlashDuotoneIcon } from "../duotone/text-t-slash-duotone.icon";
import { TextTSlashFillIcon } from "../fill/text-t-slash-fill.icon";
import { TextTSlashLightIcon } from "../light/text-t-slash-light.icon";
import { TextTSlashRegularIcon } from "../regular/text-t-slash-regular.icon";
import { TextTSlashThinIcon } from "../thin/text-t-slash-thin.icon";

export const TextTSlashIcon = memo(function TextTSlash(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextTSlashBoldIcon,
      duotone: TextTSlashDuotoneIcon,
      fill: TextTSlashFillIcon,
      light: TextTSlashLightIcon,
      regular: TextTSlashRegularIcon,
      thin: TextTSlashThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
