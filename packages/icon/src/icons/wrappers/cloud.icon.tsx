import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CloudBoldIcon } from "../bold";
import { CloudDuotoneIcon } from "../duotone";
import { CloudFillIcon } from "../fill";
import { CloudLightIcon } from "../light";
import { CloudRegularIcon } from "../regular";
import { CloudThinIcon } from "../thin";

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
