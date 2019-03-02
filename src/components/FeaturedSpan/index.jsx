import React from 'react';
import styled from 'styled-components';

const Span = styled.span`
border-style: solid;
border-width: 2px;
border-color: #59a868;
font-size: 12px;
color: #59a868;
padding: 4px 4px 3px 3px;
font-weight: bold;
`;

class FeaturedSpan extends React.PureComponent {

    render() {
        return (
            <Span {...this.props} />
        );
    }
}

export default FeaturedSpan;