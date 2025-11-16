import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CloudBold } from "../bold";
import { CloudDuotone } from "../duotone";
import { CloudFill } from "../fill";
import { CloudLight } from "../light";
import { CloudRegular } from "../regular";
import { CloudThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Cloud = memo(function Cloud(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CloudBold,
      duotone: CloudDuotone,
      fill: CloudFill,
      light: CloudLight,
      regular: CloudRegular,
      thin: CloudThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
