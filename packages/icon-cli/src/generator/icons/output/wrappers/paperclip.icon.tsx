import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { PaperclipBoldIcon } from "../bold";
        import { PaperclipDuotoneIcon } from "../duotone";
        import { PaperclipFillIcon } from "../fill";
        import { PaperclipLightIcon } from "../light";
        import { PaperclipRegularIcon } from "../regular";
        import { PaperclipThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const PaperclipIcon = memo(function Paperclip(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: PaperclipBoldIcon,
            duotone: PaperclipDuotoneIcon,
            fill: PaperclipFillIcon,
            light: PaperclipLightIcon,
            regular: PaperclipRegularIcon,
            thin: PaperclipThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
