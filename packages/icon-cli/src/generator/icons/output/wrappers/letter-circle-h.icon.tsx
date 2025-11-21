import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { LetterCircleHBoldIcon } from "../bold";
        import { LetterCircleHDuotoneIcon } from "../duotone";
        import { LetterCircleHFillIcon } from "../fill";
        import { LetterCircleHLightIcon } from "../light";
        import { LetterCircleHRegularIcon } from "../regular";
        import { LetterCircleHThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const LetterCircleHIcon = memo(function LetterCircleH(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: LetterCircleHBoldIcon,
            duotone: LetterCircleHDuotoneIcon,
            fill: LetterCircleHFillIcon,
            light: LetterCircleHLightIcon,
            regular: LetterCircleHRegularIcon,
            thin: LetterCircleHThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
