import React from 'react';
import { SwapiServiceConsumer } from '../swapiService-context/';

const withSwapiService =  (Wrapped, mapToProps) => {
    return (
       (props) => {
           return (
            <SwapiServiceConsumer>
                {
                    (swapiService) => {
                        const serviceProps = mapToProps(swapiService);
                        return <Wrapped {...props} {...serviceProps}/>
                    }
                }
            </SwapiServiceConsumer>
           )
       }
    )
}

export default withSwapiService;