import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FileDocBoldIcon } from "../bold/file-doc-bold.icon";
import { FileDocDuotoneIcon } from "../duotone/file-doc-duotone.icon";
import { FileDocFillIcon } from "../fill/file-doc-fill.icon";
import { FileDocLightIcon } from "../light/file-doc-light.icon";
import { FileDocRegularIcon } from "../regular/file-doc-regular.icon";
import { FileDocThinIcon } from "../thin/file-doc-thin.icon";

export const FileDocIcon = memo(function FileDoc(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileDocBoldIcon,
      duotone: FileDocDuotoneIcon,
      fill: FileDocFillIcon,
      light: FileDocLightIcon,
      regular: FileDocRegularIcon,
      thin: FileDocThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
