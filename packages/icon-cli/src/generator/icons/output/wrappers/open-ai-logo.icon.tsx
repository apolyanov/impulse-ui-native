import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { OpenAiLogoBoldIcon } from "../bold";
        import { OpenAiLogoDuotoneIcon } from "../duotone";
        import { OpenAiLogoFillIcon } from "../fill";
        import { OpenAiLogoLightIcon } from "../light";
        import { OpenAiLogoRegularIcon } from "../regular";
        import { OpenAiLogoThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const OpenAiLogoIcon = memo(function OpenAiLogo(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: OpenAiLogoBoldIcon,
            duotone: OpenAiLogoDuotoneIcon,
            fill: OpenAiLogoFillIcon,
            light: OpenAiLogoLightIcon,
            regular: OpenAiLogoRegularIcon,
            thin: OpenAiLogoThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
