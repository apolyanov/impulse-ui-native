import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { SquareLogoBoldIcon } from "../bold";
        import { SquareLogoDuotoneIcon } from "../duotone";
        import { SquareLogoFillIcon } from "../fill";
        import { SquareLogoLightIcon } from "../light";
        import { SquareLogoRegularIcon } from "../regular";
        import { SquareLogoThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const SquareLogoIcon = memo(function SquareLogo(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: SquareLogoBoldIcon,
            duotone: SquareLogoDuotoneIcon,
            fill: SquareLogoFillIcon,
            light: SquareLogoLightIcon,
            regular: SquareLogoRegularIcon,
            thin: SquareLogoThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
