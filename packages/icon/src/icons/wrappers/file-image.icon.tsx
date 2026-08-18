import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FileImageBoldIcon } from "../bold/file-image-bold.icon";
import { FileImageDuotoneIcon } from "../duotone/file-image-duotone.icon";
import { FileImageFillIcon } from "../fill/file-image-fill.icon";
import { FileImageLightIcon } from "../light/file-image-light.icon";
import { FileImageRegularIcon } from "../regular/file-image-regular.icon";
import { FileImageThinIcon } from "../thin/file-image-thin.icon";

export const FileImageIcon = memo(function FileImage(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileImageBoldIcon,
      duotone: FileImageDuotoneIcon,
      fill: FileImageFillIcon,
      light: FileImageLightIcon,
      regular: FileImageRegularIcon,
      thin: FileImageThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
