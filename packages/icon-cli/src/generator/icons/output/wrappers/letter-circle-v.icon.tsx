import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { LetterCircleVBoldIcon } from "../bold";
        import { LetterCircleVDuotoneIcon } from "../duotone";
        import { LetterCircleVFillIcon } from "../fill";
        import { LetterCircleVLightIcon } from "../light";
        import { LetterCircleVRegularIcon } from "../regular";
        import { LetterCircleVThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const LetterCircleVIcon = memo(function LetterCircleV(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: LetterCircleVBoldIcon,
            duotone: LetterCircleVDuotoneIcon,
            fill: LetterCircleVFillIcon,
            light: LetterCircleVLightIcon,
            regular: LetterCircleVRegularIcon,
            thin: LetterCircleVThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
