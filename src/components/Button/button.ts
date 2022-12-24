import { TooltipPlacement } from '../Tooltip/Tooltip.component';

export type ButtonProps = {
    onClick?: (withArgs?: any) => void;
    type?: 'submit' | 'button';
    children: any;
    onSubmit?: () => Promise<void>;
    disabled?: boolean;
    size?: 'sm' | 'md' | 'lg';
    tooltipText?: string;
    tooltopPlacement?: TooltipPlacement;
    includeTooltip?: boolean;
    className?: string;
};
