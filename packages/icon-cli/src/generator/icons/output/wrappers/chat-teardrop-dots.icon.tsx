import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ChatTeardropDotsBoldIcon } from "../bold";
        import { ChatTeardropDotsDuotoneIcon } from "../duotone";
        import { ChatTeardropDotsFillIcon } from "../fill";
        import { ChatTeardropDotsLightIcon } from "../light";
        import { ChatTeardropDotsRegularIcon } from "../regular";
        import { ChatTeardropDotsThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ChatTeardropDotsIcon = memo(function ChatTeardropDots(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ChatTeardropDotsBoldIcon,
            duotone: ChatTeardropDotsDuotoneIcon,
            fill: ChatTeardropDotsFillIcon,
            light: ChatTeardropDotsLightIcon,
            regular: ChatTeardropDotsRegularIcon,
            thin: ChatTeardropDotsThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
