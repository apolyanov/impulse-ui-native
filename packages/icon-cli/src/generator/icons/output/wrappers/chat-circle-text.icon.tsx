import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ChatCircleTextBoldIcon } from "../bold";
        import { ChatCircleTextDuotoneIcon } from "../duotone";
        import { ChatCircleTextFillIcon } from "../fill";
        import { ChatCircleTextLightIcon } from "../light";
        import { ChatCircleTextRegularIcon } from "../regular";
        import { ChatCircleTextThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ChatCircleTextIcon = memo(function ChatCircleText(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ChatCircleTextBoldIcon,
            duotone: ChatCircleTextDuotoneIcon,
            fill: ChatCircleTextFillIcon,
            light: ChatCircleTextLightIcon,
            regular: ChatCircleTextRegularIcon,
            thin: ChatCircleTextThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
