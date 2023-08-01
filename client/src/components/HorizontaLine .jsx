import React from 'react'
import { Divider } from 'antd'

function HorizontaLine() {
    return (
        <div>
            <Divider>
                <div style={{ display: 'flex', alignItems: 'center', margin: '20px 0' }}>
                    <div style={{ flexGrow: 1, height: '1px', backgroundColor: '#000' }}></div>
                    <div style={{ margin: '0 10px', fontWeight: 'bold' }}>or</div>
                    <div style={{ flexGrow: 1, height: '1px', backgroundColor: '#000' }}></div>
                </div>
            </Divider>
        </div>
    )
}

export default HorizontaLine
