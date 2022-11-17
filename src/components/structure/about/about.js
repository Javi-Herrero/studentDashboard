import React from "react";
import Title from "../smallerComponents/title";
import '../../../style/About.css'

const About = (props) => {


    return (<div className={props.className}>
        <Title title={'About This Project'} />
        <h2>Technical info</h2>
        <p>This project uses two sources of data: a csv file for the survey data and a request to randomuser.org to create the mock students data.
            Then, this data is manipulated in different ways to generate the rest of the data shown in the charts.</p>
        <p>First I used <a href="https://www.papaparse.com/" target='blank'>Papaparse.js </a> to convert the .csv into more usable data.</p>
        <p>The charts are created using  <a href="https://recharts.org/en-US/" target='blank'>{'<'}Recharts{' />'}</a> library.</p>
        <p>The whole App is built using <a href="https://reactjs.org/" target='blank'>{'<'}React{' />'}</a> and the state is managed using <a href="https://redux.js.org" target='blank'>{'<'}Redux{' />'}</a></p>
        <h2>Data info</h2>

        <p>In this project you can see information corresponding to a survey to students of <a href="https://www.wincacademy.nl" target='blank'>Winc Academy</a>.</p>
        <p></p>
        <p> Each student was asked four questions over 56 assignments. The questions are:</p>
        <ol>
            <li> Your name</li>
            <li> Name of the assignment  </li>
            <li> How difficult was this assignment for you (1 - 5)</li>
            <li> How fun was this assignment for you (1 - 5)</li>
        </ol>
        <p>In the first bar chart, the displayed info corresponds to the average fun and difficulty (X axis) of every student over all the assignments (Y axis)</p>
        <p>When an assignment is selected, more info is displayed below. This includes:</p>
        <ol>
            <li> The percentage distribution of the votes (which percentage of the students voted 1, 2 etc. )both for fun and difficulty </li>
            <li> The average fun and difficulty of the selected assignment. </li>
            <li> The individual valoration of the students over the selected assignment.</li>
        </ol>
        <div className="gap"></div>

    </div>
    )
}

export default About