import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { DownloadSimpleBoldIcon } from "../bold";
        import { DownloadSimpleDuotoneIcon } from "../duotone";
        import { DownloadSimpleFillIcon } from "../fill";
        import { DownloadSimpleLightIcon } from "../light";
        import { DownloadSimpleRegularIcon } from "../regular";
        import { DownloadSimpleThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const DownloadSimpleIcon = memo(function DownloadSimple(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: DownloadSimpleBoldIcon,
            duotone: DownloadSimpleDuotoneIcon,
            fill: DownloadSimpleFillIcon,
            light: DownloadSimpleLightIcon,
            regular: DownloadSimpleRegularIcon,
            thin: DownloadSimpleThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
