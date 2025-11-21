import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { QuestionMarkBoldIcon } from "../bold";
        import { QuestionMarkDuotoneIcon } from "../duotone";
        import { QuestionMarkFillIcon } from "../fill";
        import { QuestionMarkLightIcon } from "../light";
        import { QuestionMarkRegularIcon } from "../regular";
        import { QuestionMarkThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const QuestionMarkIcon = memo(function QuestionMark(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: QuestionMarkBoldIcon,
            duotone: QuestionMarkDuotoneIcon,
            fill: QuestionMarkFillIcon,
            light: QuestionMarkLightIcon,
            regular: QuestionMarkRegularIcon,
            thin: QuestionMarkThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
