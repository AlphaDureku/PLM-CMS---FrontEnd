import React from 'react';

export default function BodyMap() {
    const sectionStyle = {
        width: '65vw',
        height: '100%',
        margin: '20px auto',
        padding: '20px',
        backgroundColor: '#fff',
        textAlign: 'center',

    };

    const headingStyle = {
        color: 'black',
        textAlign: 'justify',
    };

    const paragraphStyle = {
        textAlign: 'justify',
    };

    const hrStyle = {
        margin: '20px 0',
        border: '1px solid #ddd',
        color: '#686868',
    };

    const listStyle = {
        listStyleType: 'disc',
        marginLeft: '20vw',
        padding: 0,
    };

    const imgStyle = {
        width: '40vw',
        height: '30vw',
    };
    const msystyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '50px'
    }

    return (
        <>
            <section style={sectionStyle}>
                <h2 style={headingStyle}>CAMPUS MAP</h2>
                <p style={paragraphStyle}>For reference, maps to navigate the PLM campus are posted here.</p>
            </section>

            <div style={msystyle}>
                <section>
                    <a href="https://plm.edu.ph/news/announcements/plm-opens-academic-year-2022-2023-on-sept-5" target="_blank" rel="noopener noreferrer">
                        <img src="https://plm.edu.ph/images/PLM_GEN_LUNA_GATE.jpg" alt="Gen. Luna Gate" style={imgStyle} />
                    </a>
                </section>

                <section>
                    <a href="https://plm.edu.ph/news/announcements/plm-opens-academic-year-2022-2023-on-sept-5" target="_blank" rel="noopener noreferrer">
                        <img src="https://plm.edu.ph/images/PLM_MURALLA_GATE.jpg" alt="Muralla Gate" style={imgStyle} />
                    </a>
                </section>
            </div>
        </>
    );
}
