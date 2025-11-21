import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NotebookBoldIcon } from "../bold";
import { NotebookDuotoneIcon } from "../duotone";
import { NotebookFillIcon } from "../fill";
import { NotebookLightIcon } from "../light";
import { NotebookRegularIcon } from "../regular";
import { NotebookThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NotebookIcon = memo(function Notebook(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NotebookBoldIcon,
      duotone: NotebookDuotoneIcon,
      fill: NotebookFillIcon,
      light: NotebookLightIcon,
      regular: NotebookRegularIcon,
      thin: NotebookThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
