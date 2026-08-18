import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ShareFatBoldIcon } from "../bold/share-fat-bold.icon";
import { ShareFatDuotoneIcon } from "../duotone/share-fat-duotone.icon";
import { ShareFatFillIcon } from "../fill/share-fat-fill.icon";
import { ShareFatLightIcon } from "../light/share-fat-light.icon";
import { ShareFatRegularIcon } from "../regular/share-fat-regular.icon";
import { ShareFatThinIcon } from "../thin/share-fat-thin.icon";

export const ShareFatIcon = memo(function ShareFat(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShareFatBoldIcon,
      duotone: ShareFatDuotoneIcon,
      fill: ShareFatFillIcon,
      light: ShareFatLightIcon,
      regular: ShareFatRegularIcon,
      thin: ShareFatThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
