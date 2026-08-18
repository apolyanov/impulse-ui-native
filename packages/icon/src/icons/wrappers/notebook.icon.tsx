import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NotebookBoldIcon } from "../bold/notebook-bold.icon";
import { NotebookDuotoneIcon } from "../duotone/notebook-duotone.icon";
import { NotebookFillIcon } from "../fill/notebook-fill.icon";
import { NotebookLightIcon } from "../light/notebook-light.icon";
import { NotebookRegularIcon } from "../regular/notebook-regular.icon";
import { NotebookThinIcon } from "../thin/notebook-thin.icon";

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
