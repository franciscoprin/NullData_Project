import React, { Component } from 'react';
import A from './A';

export class Phone extends Component {
    render() {
        const {children,highlight} = this.props;
        console.log(`telf:${children}`);
        return(
            <A highlight={highlight} href={`telf:${children}`}>
                {children}
            </A>
        );
    }
}

export default Phone;