import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FileRsBoldIcon } from "../bold/file-rs-bold.icon";
import { FileRsDuotoneIcon } from "../duotone/file-rs-duotone.icon";
import { FileRsFillIcon } from "../fill/file-rs-fill.icon";
import { FileRsLightIcon } from "../light/file-rs-light.icon";
import { FileRsRegularIcon } from "../regular/file-rs-regular.icon";
import { FileRsThinIcon } from "../thin/file-rs-thin.icon";

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
