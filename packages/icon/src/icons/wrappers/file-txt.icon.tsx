import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FileTxtBoldIcon } from "../bold/file-txt-bold.icon";
import { FileTxtDuotoneIcon } from "../duotone/file-txt-duotone.icon";
import { FileTxtFillIcon } from "../fill/file-txt-fill.icon";
import { FileTxtLightIcon } from "../light/file-txt-light.icon";
import { FileTxtRegularIcon } from "../regular/file-txt-regular.icon";
import { FileTxtThinIcon } from "../thin/file-txt-thin.icon";

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
