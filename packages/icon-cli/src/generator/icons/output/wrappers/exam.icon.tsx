import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ExamBoldIcon } from "../bold";
        import { ExamDuotoneIcon } from "../duotone";
        import { ExamFillIcon } from "../fill";
        import { ExamLightIcon } from "../light";
        import { ExamRegularIcon } from "../regular";
        import { ExamThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ExamIcon = memo(function Exam(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ExamBoldIcon,
            duotone: ExamDuotoneIcon,
            fill: ExamFillIcon,
            light: ExamLightIcon,
            regular: ExamRegularIcon,
            thin: ExamThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
