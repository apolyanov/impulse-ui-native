import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { SigmaBoldIcon } from "../bold";
        import { SigmaDuotoneIcon } from "../duotone";
        import { SigmaFillIcon } from "../fill";
        import { SigmaLightIcon } from "../light";
        import { SigmaRegularIcon } from "../regular";
        import { SigmaThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const SigmaIcon = memo(function Sigma(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: SigmaBoldIcon,
            duotone: SigmaDuotoneIcon,
            fill: SigmaFillIcon,
            light: SigmaLightIcon,
            regular: SigmaRegularIcon,
            thin: SigmaThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
