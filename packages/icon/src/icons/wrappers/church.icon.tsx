import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ChurchBoldIcon } from "../bold/church-bold.icon";
import { ChurchDuotoneIcon } from "../duotone/church-duotone.icon";
import { ChurchFillIcon } from "../fill/church-fill.icon";
import { ChurchLightIcon } from "../light/church-light.icon";
import { ChurchRegularIcon } from "../regular/church-regular.icon";
import { ChurchThinIcon } from "../thin/church-thin.icon";

export const ChurchIcon = memo(function Church(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChurchBoldIcon,
      duotone: ChurchDuotoneIcon,
      fill: ChurchFillIcon,
      light: ChurchLightIcon,
      regular: ChurchRegularIcon,
      thin: ChurchThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
