import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
background-color: white;
border-style: solid;
border-width: 1px;
border-color: #d3d8d8;
width: 58px;
height: 50px;
border-radius:8%;
`;

class ShareButton extends React.PureComponent {

    render() {
        return (
            <Button {...this.props} />
        );
    }
}

export default ShareButton;