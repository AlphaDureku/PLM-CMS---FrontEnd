
const Body_TuitionFees = () => {
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




    const h3Style = {
        color: '#CCA000',
    };

    return (
        <>
            <section style={sectionStyle}>
                <h2 style={headingStyle}>TUITION AND FEES</h2><br></br>
                <h3 style={h3Style}>We believe education is a great equalizer.</h3><br></br>
                <p >For the undergraduate programs, PLM does not charge for courses, course materials, or annual enrollment so people, regardless of their financial status, can secure the education and future they deserve.</p>

                <p>The Philippine Government and the City Government of Manila pay for the education. They ask so little in return — serve the people and enable financially-challenged but deserving students like them to have quality education.</p>
            </section>
        </>
    );
}

export default Body_TuitionFees;
