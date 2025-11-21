import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { DownloadBoldIcon } from "../bold";
        import { DownloadDuotoneIcon } from "../duotone";
        import { DownloadFillIcon } from "../fill";
        import { DownloadLightIcon } from "../light";
        import { DownloadRegularIcon } from "../regular";
        import { DownloadThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const DownloadIcon = memo(function Download(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: DownloadBoldIcon,
            duotone: DownloadDuotoneIcon,
            fill: DownloadFillIcon,
            light: DownloadLightIcon,
            regular: DownloadRegularIcon,
            thin: DownloadThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
