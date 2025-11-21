import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ArchiveBoldIcon } from "../bold";
        import { ArchiveDuotoneIcon } from "../duotone";
        import { ArchiveFillIcon } from "../fill";
        import { ArchiveLightIcon } from "../light";
        import { ArchiveRegularIcon } from "../regular";
        import { ArchiveThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ArchiveIcon = memo(function Archive(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ArchiveBoldIcon,
            duotone: ArchiveDuotoneIcon,
            fill: ArchiveFillIcon,
            light: ArchiveLightIcon,
            regular: ArchiveRegularIcon,
            thin: ArchiveThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
