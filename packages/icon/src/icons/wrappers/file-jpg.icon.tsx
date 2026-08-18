import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FileJpgBoldIcon } from "../bold/file-jpg-bold.icon";
import { FileJpgDuotoneIcon } from "../duotone/file-jpg-duotone.icon";
import { FileJpgFillIcon } from "../fill/file-jpg-fill.icon";
import { FileJpgLightIcon } from "../light/file-jpg-light.icon";
import { FileJpgRegularIcon } from "../regular/file-jpg-regular.icon";
import { FileJpgThinIcon } from "../thin/file-jpg-thin.icon";

export const FileJpgIcon = memo(function FileJpg(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileJpgBoldIcon,
      duotone: FileJpgDuotoneIcon,
      fill: FileJpgFillIcon,
      light: FileJpgLightIcon,
      regular: FileJpgRegularIcon,
      thin: FileJpgThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
