import React from "react"

import { Button as StyledButton } from './styles';

function Button(props) {
    return (
        <StyledButton {...props}>{props.children}</StyledButton>
    )
}

export default Button