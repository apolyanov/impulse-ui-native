import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FileXlsBoldIcon } from "../bold/file-xls-bold.icon";
import { FileXlsDuotoneIcon } from "../duotone/file-xls-duotone.icon";
import { FileXlsFillIcon } from "../fill/file-xls-fill.icon";
import { FileXlsLightIcon } from "../light/file-xls-light.icon";
import { FileXlsRegularIcon } from "../regular/file-xls-regular.icon";
import { FileXlsThinIcon } from "../thin/file-xls-thin.icon";

export const FileXlsIcon = memo(function FileXls(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileXlsBoldIcon,
      duotone: FileXlsDuotoneIcon,
      fill: FileXlsFillIcon,
      light: FileXlsLightIcon,
      regular: FileXlsRegularIcon,
      thin: FileXlsThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
