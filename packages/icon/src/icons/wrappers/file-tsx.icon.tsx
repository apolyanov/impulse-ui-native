import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FileTsxBoldIcon } from "../bold/file-tsx-bold.icon";
import { FileTsxDuotoneIcon } from "../duotone/file-tsx-duotone.icon";
import { FileTsxFillIcon } from "../fill/file-tsx-fill.icon";
import { FileTsxLightIcon } from "../light/file-tsx-light.icon";
import { FileTsxRegularIcon } from "../regular/file-tsx-regular.icon";
import { FileTsxThinIcon } from "../thin/file-tsx-thin.icon";

export const FileTsxIcon = memo(function FileTsx(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileTsxBoldIcon,
      duotone: FileTsxDuotoneIcon,
      fill: FileTsxFillIcon,
      light: FileTsxLightIcon,
      regular: FileTsxRegularIcon,
      thin: FileTsxThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
