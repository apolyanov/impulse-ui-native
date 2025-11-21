import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ChatTeardropSlashBoldIcon } from "../bold";
        import { ChatTeardropSlashDuotoneIcon } from "../duotone";
        import { ChatTeardropSlashFillIcon } from "../fill";
        import { ChatTeardropSlashLightIcon } from "../light";
        import { ChatTeardropSlashRegularIcon } from "../regular";
        import { ChatTeardropSlashThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ChatTeardropSlashIcon = memo(function ChatTeardropSlash(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ChatTeardropSlashBoldIcon,
            duotone: ChatTeardropSlashDuotoneIcon,
            fill: ChatTeardropSlashFillIcon,
            light: ChatTeardropSlashLightIcon,
            regular: ChatTeardropSlashRegularIcon,
            thin: ChatTeardropSlashThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
