import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ChatDotsBoldIcon } from "../bold";
        import { ChatDotsDuotoneIcon } from "../duotone";
        import { ChatDotsFillIcon } from "../fill";
        import { ChatDotsLightIcon } from "../light";
        import { ChatDotsRegularIcon } from "../regular";
        import { ChatDotsThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ChatDotsIcon = memo(function ChatDots(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ChatDotsBoldIcon,
            duotone: ChatDotsDuotoneIcon,
            fill: ChatDotsFillIcon,
            light: ChatDotsLightIcon,
            regular: ChatDotsRegularIcon,
            thin: ChatDotsThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
