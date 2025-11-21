import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { LetterCirclePBoldIcon } from "../bold";
        import { LetterCirclePDuotoneIcon } from "../duotone";
        import { LetterCirclePFillIcon } from "../fill";
        import { LetterCirclePLightIcon } from "../light";
        import { LetterCirclePRegularIcon } from "../regular";
        import { LetterCirclePThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const LetterCirclePIcon = memo(function LetterCircleP(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: LetterCirclePBoldIcon,
            duotone: LetterCirclePDuotoneIcon,
            fill: LetterCirclePFillIcon,
            light: LetterCirclePLightIcon,
            regular: LetterCirclePRegularIcon,
            thin: LetterCirclePThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
