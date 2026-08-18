import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FilePptBoldIcon } from "../bold/file-ppt-bold.icon";
import { FilePptDuotoneIcon } from "../duotone/file-ppt-duotone.icon";
import { FilePptFillIcon } from "../fill/file-ppt-fill.icon";
import { FilePptLightIcon } from "../light/file-ppt-light.icon";
import { FilePptRegularIcon } from "../regular/file-ppt-regular.icon";
import { FilePptThinIcon } from "../thin/file-ppt-thin.icon";

export const FilePptIcon = memo(function FilePpt(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FilePptBoldIcon,
      duotone: FilePptDuotoneIcon,
      fill: FilePptFillIcon,
      light: FilePptLightIcon,
      regular: FilePptRegularIcon,
      thin: FilePptThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
