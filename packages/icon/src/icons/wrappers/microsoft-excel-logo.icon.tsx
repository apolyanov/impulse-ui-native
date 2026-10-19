import { createIcon } from "../../hocs/create-icon.hoc";
import { MicrosoftExcelLogoBoldIcon } from "../bold/microsoft-excel-logo-bold.icon";
import { MicrosoftExcelLogoDuotoneIcon } from "../duotone/microsoft-excel-logo-duotone.icon";
import { MicrosoftExcelLogoFillIcon } from "../fill/microsoft-excel-logo-fill.icon";
import { MicrosoftExcelLogoLightIcon } from "../light/microsoft-excel-logo-light.icon";
import { MicrosoftExcelLogoRegularIcon } from "../regular/microsoft-excel-logo-regular.icon";
import { MicrosoftExcelLogoThinIcon } from "../thin/microsoft-excel-logo-thin.icon";

export const MicrosoftExcelLogoIcon = createIcon("MicrosoftExcelLogo", {
  bold: MicrosoftExcelLogoBoldIcon,
  duotone: MicrosoftExcelLogoDuotoneIcon,
  fill: MicrosoftExcelLogoFillIcon,
  light: MicrosoftExcelLogoLightIcon,
  regular: MicrosoftExcelLogoRegularIcon,
  thin: MicrosoftExcelLogoThinIcon,
});
