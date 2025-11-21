import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ProjectorScreenBoldIcon } from "../bold";
        import { ProjectorScreenDuotoneIcon } from "../duotone";
        import { ProjectorScreenFillIcon } from "../fill";
        import { ProjectorScreenLightIcon } from "../light";
        import { ProjectorScreenRegularIcon } from "../regular";
        import { ProjectorScreenThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ProjectorScreenIcon = memo(function ProjectorScreen(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ProjectorScreenBoldIcon,
            duotone: ProjectorScreenDuotoneIcon,
            fill: ProjectorScreenFillIcon,
            light: ProjectorScreenLightIcon,
            regular: ProjectorScreenRegularIcon,
            thin: ProjectorScreenThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
