import { ControlAddon } from "./addon";
import { ControlContainer } from "./container";
import { ControlError } from "./error";
import { ControlField } from "./field";
import { ControlIcon } from "./icon";
import { ControlInput } from "./input";
import { ControlLabel } from "./label";
import { ControlLoader } from "./loader";
import { ControlPlaceholder } from "./placeholder";
import { ControlProvider } from "./provider";
import { ControlRoot } from "./root";
import { ControlTrigger } from "./trigger";
import { ControlValue } from "./value";

export const Control = {
  Field: ControlField,
  Trigger: ControlTrigger,
  Icon: ControlIcon,
  Container: ControlContainer,
  Provider: ControlProvider,
  Root: ControlRoot,
  Label: ControlLabel,
  Error: ControlError,
  Addon: ControlAddon,
  Input: ControlInput,
  Placeholder: ControlPlaceholder,
  Value: ControlValue,
  Loader: ControlLoader,
};
