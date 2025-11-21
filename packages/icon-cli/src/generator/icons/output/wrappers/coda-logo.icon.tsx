import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CodaLogoBoldIcon } from "../bold";
        import { CodaLogoDuotoneIcon } from "../duotone";
        import { CodaLogoFillIcon } from "../fill";
        import { CodaLogoLightIcon } from "../light";
        import { CodaLogoRegularIcon } from "../regular";
        import { CodaLogoThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CodaLogoIcon = memo(function CodaLogo(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CodaLogoBoldIcon,
            duotone: CodaLogoDuotoneIcon,
            fill: CodaLogoFillIcon,
            light: CodaLogoLightIcon,
            regular: CodaLogoRegularIcon,
            thin: CodaLogoThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
