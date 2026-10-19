import { createIcon } from "../../hocs/create-icon.hoc";
import { ChartPieSliceBoldIcon } from "../bold/chart-pie-slice-bold.icon";
import { ChartPieSliceDuotoneIcon } from "../duotone/chart-pie-slice-duotone.icon";
import { ChartPieSliceFillIcon } from "../fill/chart-pie-slice-fill.icon";
import { ChartPieSliceLightIcon } from "../light/chart-pie-slice-light.icon";
import { ChartPieSliceRegularIcon } from "../regular/chart-pie-slice-regular.icon";
import { ChartPieSliceThinIcon } from "../thin/chart-pie-slice-thin.icon";

export const ChartPieSliceIcon = createIcon("ChartPieSlice", {
  bold: ChartPieSliceBoldIcon,
  duotone: ChartPieSliceDuotoneIcon,
  fill: ChartPieSliceFillIcon,
  light: ChartPieSliceLightIcon,
  regular: ChartPieSliceRegularIcon,
  thin: ChartPieSliceThinIcon,
});
