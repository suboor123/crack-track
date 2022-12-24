import React from 'react'
import { Button, Drawer, Placeholder } from 'rsuite'

type Appearance = 'default' | 'primary' | 'link' | 'subtle' | 'ghost';

type DrawerSize = 'full' | 'lg' | 'md' | 'sm' | 'xs';

interface Props {
    open: boolean;
    onClose: () => void;
    children: JSX.Element | JSX.Element[];
    hasHeader?: {
        enable: boolean;
        buttonName: string;
        onBtnClick: () => void;
        title: string
        appearance?: Appearance
    }
    size?: DrawerSize
}

export const DrawerComponent: React.FC<Props> = (props) => {

    const {
        open,
        onClose,
        children,
        hasHeader,
        size
    } = props;

    return (
        <Drawer placement={'bottom'} size={size || 'md'} open={open} onClose={() => onClose()}>
            {hasHeader && hasHeader.enable && <Drawer.Header>
                <Drawer.Title>{hasHeader.title}</Drawer.Title>
                <Drawer.Actions>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button onClick={props.hasHeader?.onBtnClick} appearance={props.hasHeader!.appearance ? props.hasHeader!.appearance  : "primary"}>
                        {props.hasHeader?.buttonName}
                    </Button>
                </Drawer.Actions>
            </Drawer.Header>}
            <Drawer.Body>
                {children}
            </Drawer.Body>
        </Drawer>
    )
}
