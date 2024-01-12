const BodyFinancial_aid = () => {
    const sectionStyle = {
        width: '65vw',
        height: '100%',
        margin: '20px auto',
        padding: '20px',
        backgroundColor: '#fff',
    };

    const headingStyle = {
        color: 'black',
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

    const h3Style = {
        color: '#CCA000',
    };

    const marginTopStyle = {
        marginTop: '-4vw',
    };

    return (
        <>
            <section style={sectionStyle}>
                <h2 style={headingStyle}>SCHOLARSHIPS AND FINANCIAL AID</h2>
                <p style={paragraphStyle}>PLM partners with foundations and generous individuals to provide poor but deserving students the fighting chance that they deserve. Depending on the partners, scholars receive monthly stipends, book allowances, and even a year-end bonus.</p>
                <hr style={hrStyle} />

                <h3 style={h3Style}>Scholarship Partners</h3>
                <p style={paragraphStyle}>For the Academic Year 2022-2023, 24 scholarship partners provide PLM students with not only financial assistance but also training and opportunities for exposure. Out of the 24, 21 are group sponsors and three are individual providers.</p>

                <ul style={listStyle}>
                    <li>AMY Foundation</li>
                    <li>Alfonso Yuchengco Foundation</li>
                    <li>Buddhist Tzu Chi Foundation</li>
                    <li>Cebuana Lhuillier Foundation</li>
                    <li>Charity First Foundation</li>
                    <li>Chinese Filipino Business Club</li>
                    <li>DBP Foundation</li>
                    <li>Evangeline Barrios Fletcher-Shepherd Scholarship Grant</li>
                    <li>Fil-Am Society of Masters and Past Masters in California Masonry</li>
                    <li>Gokongwei Brothers Foundation, Inc.</li>
                    <li>International Container Terminal Services, Inc.</li>
                    <li>Landbank North NCRBG</li>
                    <li>Lingap Adhikain Foundation</li>
                    <li>Luis Co Chi Kiat Foundation</li>
                    <li>Manila Mt. Lebanon</li>
                    <li>Master Rui Miao Foundation</li>
                    <li>Megawide Foundation</li>
                    <li>Megaworld Foundation</li>
                    <li>Miami Foundation (Fain Foundation)</li>
                    <li>PLM-Scholarship Foundation, Inc.</li>
                    <li>Security Bank Foundation</li>
                    <li>Simplicio Gamboa, Sr. Foundation</li>
                    <li>SM Foundation</li>
                </ul>
                <br />
                <p>The following are the <b>three (3) individual providers/sponsors</b> who are mostly PLM officials, alumni, philanthropists, and friends of PLM:</p>
                <ul>
                    <li>Ambassador and former Regent Ramon Bagatsing, Jr.</li>
                    <li>Mr. Marc Gorospe</li>
                    <li>Mr. Russel Tena</li>
                </ul>
                <hr style={hrStyle} />
            </section>

            <section style={marginTopStyle}>
                <h3 style={headingStyle}>FAQs</h3>
                <h4><i>How are scholars selected?</i></h4>
                <p>The scholarship providers evaluate and approve applications based on the following requirements:</p>
                <ul>
                    <li>Family annual income of Php 300,000.00 or less</li>
                    <li>General Weighted Average (GWA) of not less than 2.25</li>
                    <li>With no previous scholarship application nor a recipient of any scholarship grant</li>
                    <li>Full-time student (from all levels) with regular load</li>
                    <li>With good moral character</li>
                </ul>

                <h4><i>Who can be scholarship providers?</i></h4>
                <p>Organizations or individuals interested to provide scholarships to PLM students may contact the Office of Public Affairs (OPA) and enter into a Memorandum of Agreement subject to the Board of Regent's approval.</p>
                <p>Inquiries and letters of intent may be addressed to:</p>
                <p><b>Dina C. Mendez</b>
                    <br></br>OIC, Public Affairs
                    email: vppa@plm.edu.ph</p>
                <p>Once the partnership is approved, the OPA contacts the University Committee on Scholarship and Office of Student Development and Services (OSDS) as Committee Secretariat about the scholarship requirements and slots for dissemination to the colleges and Information and Communications Technology (ICTO) so that students who need the financial aid could apply.</p>
                <p>The colleges receive applications from interested students. Then it submits the applications to the OSDS, which creates a shortlist using the scholarship providers' criteria. This list is submitted to the Committee on Scholarship, which makes the final recommendation and submits it to the OPA. The OPA then coordinates the recommended scholars to the scholarship providers for their concurrence.</p>
            </section>
        </>
    );
};

export default BodyFinancial_aid;
