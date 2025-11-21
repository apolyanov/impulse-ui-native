import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ParagraphBoldIcon } from "../bold";
        import { ParagraphDuotoneIcon } from "../duotone";
        import { ParagraphFillIcon } from "../fill";
        import { ParagraphLightIcon } from "../light";
        import { ParagraphRegularIcon } from "../regular";
        import { ParagraphThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ParagraphIcon = memo(function Paragraph(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ParagraphBoldIcon,
            duotone: ParagraphDuotoneIcon,
            fill: ParagraphFillIcon,
            light: ParagraphLightIcon,
            regular: ParagraphRegularIcon,
            thin: ParagraphThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
