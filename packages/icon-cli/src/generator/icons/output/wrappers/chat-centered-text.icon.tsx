import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ChatCenteredTextBoldIcon } from "../bold";
        import { ChatCenteredTextDuotoneIcon } from "../duotone";
        import { ChatCenteredTextFillIcon } from "../fill";
        import { ChatCenteredTextLightIcon } from "../light";
        import { ChatCenteredTextRegularIcon } from "../regular";
        import { ChatCenteredTextThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ChatCenteredTextIcon = memo(function ChatCenteredText(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ChatCenteredTextBoldIcon,
            duotone: ChatCenteredTextDuotoneIcon,
            fill: ChatCenteredTextFillIcon,
            light: ChatCenteredTextLightIcon,
            regular: ChatCenteredTextRegularIcon,
            thin: ChatCenteredTextThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
