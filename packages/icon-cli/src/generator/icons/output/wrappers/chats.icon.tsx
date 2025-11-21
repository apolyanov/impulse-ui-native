import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ChatsBoldIcon } from "../bold";
        import { ChatsDuotoneIcon } from "../duotone";
        import { ChatsFillIcon } from "../fill";
        import { ChatsLightIcon } from "../light";
        import { ChatsRegularIcon } from "../regular";
        import { ChatsThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ChatsIcon = memo(function Chats(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ChatsBoldIcon,
            duotone: ChatsDuotoneIcon,
            fill: ChatsFillIcon,
            light: ChatsLightIcon,
            regular: ChatsRegularIcon,
            thin: ChatsThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
