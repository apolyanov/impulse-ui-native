import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CloudBoldIcon } from "../bold/cloud-bold.icon";
import { CloudDuotoneIcon } from "../duotone/cloud-duotone.icon";
import { CloudFillIcon } from "../fill/cloud-fill.icon";
import { CloudLightIcon } from "../light/cloud-light.icon";
import { CloudRegularIcon } from "../regular/cloud-regular.icon";
import { CloudThinIcon } from "../thin/cloud-thin.icon";

export const CloudIcon = memo(function Cloud(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CloudBoldIcon,
      duotone: CloudDuotoneIcon,
      fill: CloudFillIcon,
      light: CloudLightIcon,
      regular: CloudRegularIcon,
      thin: CloudThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
