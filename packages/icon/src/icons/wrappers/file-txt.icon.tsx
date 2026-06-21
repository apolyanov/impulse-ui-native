import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FileTxtBoldIcon } from "../bold";
import { FileTxtDuotoneIcon } from "../duotone";
import { FileTxtFillIcon } from "../fill";
import { FileTxtLightIcon } from "../light";
import { FileTxtRegularIcon } from "../regular";
import { FileTxtThinIcon } from "../thin";

export const FileTxtIcon = memo(function FileTxt(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileTxtBoldIcon,
      duotone: FileTxtDuotoneIcon,
      fill: FileTxtFillIcon,
      light: FileTxtLightIcon,
      regular: FileTxtRegularIcon,
      thin: FileTxtThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
