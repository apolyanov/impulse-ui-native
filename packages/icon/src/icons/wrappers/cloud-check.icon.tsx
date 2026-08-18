import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CloudCheckBoldIcon } from "../bold/cloud-check-bold.icon";
import { CloudCheckDuotoneIcon } from "../duotone/cloud-check-duotone.icon";
import { CloudCheckFillIcon } from "../fill/cloud-check-fill.icon";
import { CloudCheckLightIcon } from "../light/cloud-check-light.icon";
import { CloudCheckRegularIcon } from "../regular/cloud-check-regular.icon";
import { CloudCheckThinIcon } from "../thin/cloud-check-thin.icon";

export const CloudCheckIcon = memo(function CloudCheck(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CloudCheckBoldIcon,
      duotone: CloudCheckDuotoneIcon,
      fill: CloudCheckFillIcon,
      light: CloudCheckLightIcon,
      regular: CloudCheckRegularIcon,
      thin: CloudCheckThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
