import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { YarnBoldIcon } from "../bold/yarn-bold.icon";
import { YarnDuotoneIcon } from "../duotone/yarn-duotone.icon";
import { YarnFillIcon } from "../fill/yarn-fill.icon";
import { YarnLightIcon } from "../light/yarn-light.icon";
import { YarnRegularIcon } from "../regular/yarn-regular.icon";
import { YarnThinIcon } from "../thin/yarn-thin.icon";

export const YarnIcon = memo(function Yarn(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: YarnBoldIcon,
      duotone: YarnDuotoneIcon,
      fill: YarnFillIcon,
      light: YarnLightIcon,
      regular: YarnRegularIcon,
      thin: YarnThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
