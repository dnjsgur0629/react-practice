import React, {useState} from 'react';
import {AlertDialog, Button} from 'react-onsenui'

function AlertExample() {
    const [isopen, setIsopen] = useState(false);
    return (
        <div>
            <Button onClick={() => setIsopen(true)}>Open</Button>
            <AlertDialog isOpen={isopen} onCancel={() => setIsopen(false)} cancelable>
                <div className="alert-dialog-title">Warning!</div>
                <div className="alert-dialog-content">Error!</div>
                <div className="alert-dialog-footer">
                    <Button className="alert-dialog-button" onClick={() => setIsopen(false)}>Cancel</Button>
                    <Button className="alert-dialog-button" onClick={() => setIsopen(false)}>Ok</Button>
                </div>
            </AlertDialog>
        </div>
    );
}

export default AlertExample;