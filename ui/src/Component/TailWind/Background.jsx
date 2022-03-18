import React from 'react';

function Background() {
    return (
        <div className="bg-red-400/100" style={{width: 150, height: 200}}>
            <div style={{width: 100, height: 40}}>
                <div className="bg-sky-500/100" style={{width: "inherit", height: "inherit"}}/>
                <button className="bg-sky-500/75" style={{width: "inherit", height: "inherit"}}/>
                <button className="bg-sky-500/50" style={{width: "inherit", height: "inherit"}}/>
                <button className="bg-sky-500/25" style={{width: "inherit", height: "inherit"}}/>
            </div>
        </div>
    );
}

export default Background;