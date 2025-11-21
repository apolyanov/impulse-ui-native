import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { MicrosoftExcelLogoBoldIcon } from "../bold";
        import { MicrosoftExcelLogoDuotoneIcon } from "../duotone";
        import { MicrosoftExcelLogoFillIcon } from "../fill";
        import { MicrosoftExcelLogoLightIcon } from "../light";
        import { MicrosoftExcelLogoRegularIcon } from "../regular";
        import { MicrosoftExcelLogoThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const MicrosoftExcelLogoIcon = memo(function MicrosoftExcelLogo(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: MicrosoftExcelLogoBoldIcon,
            duotone: MicrosoftExcelLogoDuotoneIcon,
            fill: MicrosoftExcelLogoFillIcon,
            light: MicrosoftExcelLogoLightIcon,
            regular: MicrosoftExcelLogoRegularIcon,
            thin: MicrosoftExcelLogoThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
