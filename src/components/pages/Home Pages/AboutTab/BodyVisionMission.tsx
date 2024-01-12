import React from 'react';

export default function BodyVisionMission() {

    const headingStyle = {
        color: '#333'
    };

    const coreValuesStyle = {
        padding: '10px',
        marginTop: '20px'
    };

    const hrStyle = {
        color: 'grey',
        margin: '40px 0' // Add margin top and bottom
    };

    return (
        <div className="container" >
            <h1 style={headingStyle}>VISION</h1>
            <p>The Pamantasan ng Lungsod ng Maynila (PLM), created by a National Charter (RA 4196, 1965), was envisioned to be Manila's premiere institution for higher learning. It provides superior standards of instructions, as well as opportunities for outstanding research in technology and other areas for the development of the intellect and to advance human knowledge.</p>
            <br></br>
            <p>The Pamantasan ng Lungsod ng Maynila has adopted the policy of preferential option for the poor and therefore has prioritized education for the underprivileged but talented students of Manila. Committed to the highest intellectual and ethical standards, PLM strives to produce competent graduates with integrity who will be responsible citizens who can contribute effectively to local, national and global initiatives for the progressive and sustainable development of humanity.</p>
            <br></br>

            <p>Guided by the values of academic excellence, integrity and social responsibility, PLM endeavors to be one of the leading universities in the ASEAN.</p>
            <hr style={hrStyle} />
            <h1 style={headingStyle}>MISSION</h1>
            <p>The Pamantasan ng Lungsod ng Maynila shall form critical-minded and service-oriented leaders and innovators in various disciplines through accessible and relevant quality education, transformative institutional research and extension services, and key linkages.</p>
            <hr style={hrStyle} />

            <div className="core-values" style={coreValuesStyle}>
                <h2 style={headingStyle}>CORE VALUES</h2>
                <p>The Pamantasan ng Lungsod ng Maynila shall be guided by the values of academic excellence, integrity and social responsibility, and by the principles of <em>Karunungan, Kaunlaran</em>, and <em>Kadakilaan</em>.</p>
            </div>
        </div>
    );
}
