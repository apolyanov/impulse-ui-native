import { createIcon } from "../../hocs/create-icon.hoc";
import { TestTubeBoldIcon } from "../bold/test-tube-bold.icon";
import { TestTubeDuotoneIcon } from "../duotone/test-tube-duotone.icon";
import { TestTubeFillIcon } from "../fill/test-tube-fill.icon";
import { TestTubeLightIcon } from "../light/test-tube-light.icon";
import { TestTubeRegularIcon } from "../regular/test-tube-regular.icon";
import { TestTubeThinIcon } from "../thin/test-tube-thin.icon";

export const TestTubeIcon = createIcon("TestTube", {
  bold: TestTubeBoldIcon,
  duotone: TestTubeDuotoneIcon,
  fill: TestTubeFillIcon,
  light: TestTubeLightIcon,
  regular: TestTubeRegularIcon,
  thin: TestTubeThinIcon,
});
