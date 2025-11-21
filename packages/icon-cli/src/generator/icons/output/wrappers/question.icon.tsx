import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { QuestionBoldIcon } from "../bold";
        import { QuestionDuotoneIcon } from "../duotone";
        import { QuestionFillIcon } from "../fill";
        import { QuestionLightIcon } from "../light";
        import { QuestionRegularIcon } from "../regular";
        import { QuestionThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const QuestionIcon = memo(function Question(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: QuestionBoldIcon,
            duotone: QuestionDuotoneIcon,
            fill: QuestionFillIcon,
            light: QuestionLightIcon,
            regular: QuestionRegularIcon,
            thin: QuestionThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
