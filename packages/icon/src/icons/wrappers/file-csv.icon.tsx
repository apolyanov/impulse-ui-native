import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FileCsvBoldIcon } from "../bold/file-csv-bold.icon";
import { FileCsvDuotoneIcon } from "../duotone/file-csv-duotone.icon";
import { FileCsvFillIcon } from "../fill/file-csv-fill.icon";
import { FileCsvLightIcon } from "../light/file-csv-light.icon";
import { FileCsvRegularIcon } from "../regular/file-csv-regular.icon";
import { FileCsvThinIcon } from "../thin/file-csv-thin.icon";

export const FileCsvIcon = memo(function FileCsv(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileCsvBoldIcon,
      duotone: FileCsvDuotoneIcon,
      fill: FileCsvFillIcon,
      light: FileCsvLightIcon,
      regular: FileCsvRegularIcon,
      thin: FileCsvThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
