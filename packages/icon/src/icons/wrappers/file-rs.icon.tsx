import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileRsBoldIcon } from "../bold";
import { FileRsDuotoneIcon } from "../duotone";
import { FileRsFillIcon } from "../fill";
import { FileRsLightIcon } from "../light";
import { FileRsRegularIcon } from "../regular";
import { FileRsThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FileRsIcon = memo(function FileRs(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileRsBoldIcon,
      duotone: FileRsDuotoneIcon,
      fill: FileRsFillIcon,
      light: FileRsLightIcon,
      regular: FileRsRegularIcon,
      thin: FileRsThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
