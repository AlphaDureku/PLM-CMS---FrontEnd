import React from 'react';

const styles = {
    container: {
    },
    content: {
        marginBottom: '20px',
    },
    title: {
        color: '#333',
    },
    paragraph: {
    },
    lyrics: {
        marginTop: '20px',
        fontStyle: 'italic',
    },
    credit: {
        marginTop: '10px',
        fontWeight: 'bold',
        color: '#666',
        fontStyle: 'italic',

    },

};
const hrStyle = {
    color: 'grey',
    margin: '30px 0' // Add margin top and bottom
};


const BodyUniversityHymn = () => {
    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <h1 style={styles.title}>UNIVERSITY HYMN</h1>
                <p style={styles.paragraph}>
                    Music helps unite the PLM community. Every Monday and official school activity,
                    students, faculty, and staff alike sing in unison the “Pamantasan Mahal”, PLM’s official hymn.
                </p>
                <p style={styles.paragraph}><br />
                    Lyrics presented to the Board of Regents in Maharnilad (official name of the famous Manila City Hall).
                </p>
                <hr style={hrStyle}></hr>
                <h2 style={styles.lyrics}>"Pamantasan Mahal"</h2>
                <p style={styles.credit}>
                    Lyrics by Gatpuno Antonio J. Villegas, Mayor of Manila (1968)<br />
                    Music by Prof. Felipe Padilla de Leon
                </p>
                <br></br>
                <p style={styles.paragraph}>
                    Pamantasan, Pamantasan Mahal<br />
                    Nagpupugay kami't nag-aalay<br />
                    Ng Pag-ibig, taos na paggalang<br />
                    Sa patnubay ng aming isipan.<br />
                    <br />
                    Karunungan tungo'y kaunlaran<br />
                    Hinuhubog kaming kabataan<br />
                    Maging Pilipinong merong dangal<br />
                    Puso'y tigib ng kadakilaan.<br />
                    <br />
                    Pamantasan Lungsod ng Maynila<br />
                    Kaming lahat dito'y iyong punla<br />
                    Tutuparin pangarap mo't nasa<br />
                    Pamantasan kami'y nanunumpa.<br />
                    Pamantasan kami'y nanunumpa.
                </p>
            </div>
        </div >
    );
};

export default BodyUniversityHymn;
