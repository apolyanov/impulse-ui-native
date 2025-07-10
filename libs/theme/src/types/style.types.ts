import { SpacingProps } from './spacing.types';
import { ColorProps } from './color.types';
import { ShadowProps } from './shadow.types';

export type StyleProps = Partial<SpacingProps & ColorProps & ShadowProps>;
