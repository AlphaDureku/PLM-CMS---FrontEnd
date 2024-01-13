
const BodyStudent_Manual = () => {
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



    const hrStyle = {
        margin: '20px 0',
        border: '1px solid #ddd',
        color: '#686868',
    };

    const listStyle = {
        listStyleType: 'disc',
        marginLeft: '20vw',
        paddingLeft: 0,
    };

    const h3Style = {
        color: '#CCA000',
    };

    return (
        <>
            <section style={sectionStyle}>
                <h2 style={headingStyle}>STUDENT MANUAL</h2>
                <h4><a href="https://plm.edu.ph/images/downloads/manuals/PLM_Student_Manual_v1.pdf">DOWNLOAD STUDENT MANUAL</a></h4>
            </section>

            <section>
                <p>The PLM Revised Student Manual is a source of important information, including student responsibilities, obligations, and privileges. This revised version contains an updated list of academic policies and significant enhancement of other provisions relating to student discipline and student activities. These rules and regulations are designed to provide positive and constructive guidelines for student behavior and discipline, and are herein presented for ready reference.</p>

                <p>The University has initiated the revision of the 2012 Student Manual through the Student Manual Revision Committee. Existing policies and procedures were reviewed leading to the amendments/revisions of the same to address new issues and questions of the present time; revised regulations mostly on academic policies are herein incorporated; henceforth, stringent implementation of the policies is to be constantly done because they are designed to create a level of consistency across the University.</p>

                <p>The basic purpose of policies and regulations, and the articulation of expected standards of student conduct is to further the mission of the University and to protect the well-being of the entire PLM community especially the students. These policies and regulations, referenced on the vision and mission of PLM, enable all the members of the University to function as a community and respond to situations accordingly. They are intended to ultimately help fulfill the goals of the University of academic excellence and social responsibility, while also furthering the core value of integrity, purposely embedded in the disciplinary policies of PLM.</p>

                <p>As the primary stakeholders of PLM, the students are the foremost consideration of the rules and regulations being implemented. Moreover, the University expands its horizons in terms of the services it offers essentially for the poor but deserving students of the City of Manila. This is because the University does not only respond to its mandate but most especially upholds the best welfare of the students.</p>
            </section>
        </>
    );
}

export default BodyStudent_Manual;
