import React, { useState } from 'react';
import { Loader, Tooltip, Whisper } from 'rsuite';
import { ButtonProps } from './button';


const Button: React.FC<ButtonProps> = (props) => {
  const [disabled, setDisabled] = useState(props.disabled || false);

  const handleClick = async () => {
    if (props.onSubmit) {
      setDisabled(true)
      await props.onSubmit!()
      setTimeout(async () => {
        setDisabled(false)
      }, 1000)
    }

    if (props.onClick) {
      props.onClick()
    }
  }

  return (<>
    <Whisper placement={props.tooltopPlacement || 'bottom'} 
    controlId="control-id-focus" trigger="hover" disabled={!props.includeTooltip}
     speaker={(<Tooltip>
      {props.tooltipText || props.children}
    </Tooltip>)}>
      <button
        onClick={async () => {
          await handleClick()
        }}
        type={props.type ? props.type : 'button'}
        disabled={disabled || props.disabled}
        className={props.className ? props.className : 
        `btn btn-primary btn-${props.size ? props.size : 'md'} mt-2 me-2`}>
        {disabled ? <Loader /> : props.children}
      </button>
    </Whisper>

  </>
  )
}

export default Button;