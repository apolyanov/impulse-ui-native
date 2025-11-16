import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileImageBold } from "../bold";
import { FileImageDuotone } from "../duotone";
import { FileImageFill } from "../fill";
import { FileImageLight } from "../light";
import { FileImageRegular } from "../regular";
import { FileImageThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FileImage = memo(function FileImage(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileImageBold,
      duotone: FileImageDuotone,
      fill: FileImageFill,
      light: FileImageLight,
      regular: FileImageRegular,
      thin: FileImageThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
