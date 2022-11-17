import React from "react"
import { useSelector } from 'react-redux'
import '../../../style/StudentContact.css'
const StudentContact = () => {
    const { studentPersonalData, selectedStudent } = useSelector(state => state.dataManager)
    let showInfo
    if (selectedStudent && (selectedStudent !== 'Select student')) {
        let selectedStudentPersonalData = studentPersonalData.find(item => item.name === selectedStudent)
        let pic = selectedStudentPersonalData.picture.medium
        let email = selectedStudentPersonalData.email
        let dob = selectedStudentPersonalData.dob.age
        let phone = selectedStudentPersonalData.phone
        showInfo =
            <div className="studentInfoMain">
                <div className="studentpic">
                    <img src={pic}></img>
                    <br />
                    <h3>{selectedStudent}</h3> ({dob})
                    <br />
                    <hr />
                </div>
                <br />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
                <div className="icontainer" onMouseOver={(e => e.target.firstChild.className = 'active')} onMouseOut={(e => e.target.firstChild.className = 'inactive')} >
                    <div >
                        <i className="material-icons">mail</i>
                        <p>{email}</p>
                    </div>
                </div>
                <br />
                <div className="icontainer" onMouseOver={(e => e.target.firstChild.className = 'active')} onMouseOut={(e => e.target.firstChild.className = 'inactive')} >
                    <div >
                        <i className="material-icons">phone</i>
                        <p>{phone}</p>
                    </div>
                </div>
            </div>
    } else { showInfo = null }

    return (
        <div className="studentContact">
            {showInfo}
        </div>
    )
}
export default StudentContact