import React from 'react'
import { Whisper, Tooltip as Tip } from 'rsuite';
export type TooltipPlacement =
  | 'top'
  | 'bottom'
  | 'right'
  | 'left'
  | 'bottomStart'
  | 'bottomEnd'
  | 'topStart'
  | 'topEnd'
  | 'leftStart'
  | 'leftEnd'
  | 'rightStart'
  | 'rightEnd'
  | 'auto'
  | 'autoVerticalStart'
  | 'autoVerticalEnd'
  | 'autoHorizontalStart'
  | 'autoHorizontalEnd';

interface Props {
  children: JSX.Element | JSX.Element[];
  placement?: TooltipPlacement;
  content: string;

}

const Tooltip: React.FC<Props> = (props) => {
  return (
    <Whisper placement={props.placement ? props.placement : 'bottom'} controlId="control-id-click" trigger="hover" speaker={
      (<Tip >
        {props.content}
      </Tip>)
    }>
      {props.children as any}
    </Whisper>
  )
}

export default Tooltip