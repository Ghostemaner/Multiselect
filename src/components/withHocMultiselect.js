import React from 'react';

const withHocMultiselect = (Component) => {
    const NewComponent = (props) => {
        return <Component {...props}/>
    }
    return NewComponent
}

export default withHocMultiselect;