import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ChatCenteredSlashBoldIcon } from "../bold";
        import { ChatCenteredSlashDuotoneIcon } from "../duotone";
        import { ChatCenteredSlashFillIcon } from "../fill";
        import { ChatCenteredSlashLightIcon } from "../light";
        import { ChatCenteredSlashRegularIcon } from "../regular";
        import { ChatCenteredSlashThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ChatCenteredSlashIcon = memo(function ChatCenteredSlash(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ChatCenteredSlashBoldIcon,
            duotone: ChatCenteredSlashDuotoneIcon,
            fill: ChatCenteredSlashFillIcon,
            light: ChatCenteredSlashLightIcon,
            regular: ChatCenteredSlashRegularIcon,
            thin: ChatCenteredSlashThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
