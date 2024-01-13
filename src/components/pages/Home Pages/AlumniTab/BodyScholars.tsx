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
    hr: {
        margin: '20px 0',
        border: '1px solid #ddd',
        color: '#686868',
    },
    ul: {
        listStyleType: 'disc',
        marginLeft: '5vw',
        paddingLeft: 0,
    },
    img: {
        display: 'block',
        margin: 'auto',
    },
    firstimg: {
        width: '30vw',
        height: '200px',
    },
    secondimg: {
        width: '350px',
        height: '450px',
    },
};

export default function BodyScholars() {
    return (
        <>
            <section style={styles.section}>
                <h2 style={styles.h2}>PLM SCHOLARS FOUNDATION INC.</h2>
                <a href="https://plm.edu.ph/images/Top-menu/Alumni/SFI/PLMSFI_Logo.png">
                    <img
                        src="https://plm.edu.ph/images/Top-menu/Alumni/SFI/PLMSFI_Logo.png"
                        alt="PLMSFI Logo"
                        style={styles.firstimg}
                    />
                </a>
                <p style={styles.p}>
                    The Pamantasan ng Lungsod ng Maynila Scholars Foundation, Inc. (PLMSFI) was organized primarily for the following twin purposes and objectives:
                </p>
                <br></br>
                <ul style={styles.ul}>
                    <li>Student assistance (i.e., grant of scholarship to economically disadvantaged, but deserving students)</li>
                    <li>Development of the spirit of entrepreneurship among students.</li>
                </ul>
                <br></br>

                <p style={styles.p}>
                    Calling all aspiring scholars who are passionate about pursuing higher education and making a difference in the world! This is your opportunity to unlock limitless possibilities and transform your future.
                </p>

                <p>
                    We are delighted to announce that the PLM Scholars Foundation, Inc. (PLMSFI) is now accepting applications for scholarship for the AY 2023-2024, of all PLM students only who are at least in their sophomore year.
                </p>

                <p>
                    The PLM Scholars Foundation Inc. is committed to grant a scholarship to economically disadvantaged but deserving students. The deadline for applications is August 15. Don't miss out on this incredible opportunity to continue your college education.
                </p>

                <p>
                    To apply and learn more about the scholarship program, please visit this link:
                </p>
                <a href="https://bit.ly/plmsfiapplicationform" target="_blank">
                    https://bit.ly/plmsfiapplicationform
                </a>

                <p>
                    or, scan the QR code for the application form:

                </p>
                <a href="https://plm.edu.ph/images/Top-menu/Alumni/SFI/PLMSFI_SA_04.jpg">
                    <img
                        src="https://plm.edu.ph/images/Top-menu/Alumni/SFI/PLMSFI_SA_04.jpg"
                        alt="QR Code"
                        style={styles.secondimg}
                    />
                </a>
                <br></br>

                <p>
                    Help us spread the word by sharing this post and tagging individuals who could benefit from this life-changing scholarship!
                </p>
            </section>
        </>
    );
}
