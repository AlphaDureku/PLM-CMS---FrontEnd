import React from 'react';

const styles = {
    section: {
        width: '65vw',
        height: '100%',
        margin: '20px auto',
        padding: '20px',
        backgroundColor: '#fff',
    },
    h2: {
        color: 'black',
    },
    p: {
        textAlign: 'justify',
    },
};

export default function BodyAssoc() {
    return (
        <section style={styles.section}>
            <h2 style={styles.h2}>THE ALUMNI ASSOCIATION</h2>
            <p style={styles.p}>
                The PLM Alumni Association, Inc. is a SEC-registered organization composed of graduates of the university from here and abroad.
            </p>
            <p style={styles.p}>
                PLM connects with the Alumni Association to help maintain their members' ties to the university and Manila. The association holds its own activities to celebrate PLM's foundation anniversary and alumni achievements, among others.
            </p>
        </section>
    );
}
