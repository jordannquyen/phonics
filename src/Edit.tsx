import React from 'react';

interface Props{};
interface State{};

class Edit extends React.Component<Props, State> {
    render() {
        const all = {
            backgroundColor: '#282c34',
        }

        const third = {
            float: 'left',
            width: '33%',
        } as React.CSSProperties;

        return (
            <div style={all}>
                <div style={third}>              

                </div>
                <div style={third}>
                    
                </div>
                <div style={third}>
                    
                </div>
            </div>
        )
    }
}

export default Edit;