import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { GitlabLogoSimpleBoldIcon } from "../bold";
        import { GitlabLogoSimpleDuotoneIcon } from "../duotone";
        import { GitlabLogoSimpleFillIcon } from "../fill";
        import { GitlabLogoSimpleLightIcon } from "../light";
        import { GitlabLogoSimpleRegularIcon } from "../regular";
        import { GitlabLogoSimpleThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const GitlabLogoSimpleIcon = memo(function GitlabLogoSimple(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: GitlabLogoSimpleBoldIcon,
            duotone: GitlabLogoSimpleDuotoneIcon,
            fill: GitlabLogoSimpleFillIcon,
            light: GitlabLogoSimpleLightIcon,
            regular: GitlabLogoSimpleRegularIcon,
            thin: GitlabLogoSimpleThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
