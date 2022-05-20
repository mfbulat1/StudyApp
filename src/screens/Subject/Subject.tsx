import React from 'react';
import Box from "@mui/material/Box";
import CourseProgram from "./CourseProgram/CourseProgram";
import MainCourseBlock from "./MainCourseBlock/MainCourseBlock";
import CourseDescription from "./CourseDescription/CourseDescription";

const LESSONS = [
    {
        number: 1,
        id: 1,
        title: 'Название урока',
        status: 'done',
    },
    {
        number: 2,
        id: 2,
        title: 'Название урока 2',
        status: 'done',
    },
    {
        number: 3,
        id: 3,
        title: 'Название урока',
        status: '',
    },
    {
        number: 4,
        id: 34,
        title: 'Название урока',
        status: '',
    },
]

const Subject = () => {
    return (
        <Box sx={{display: 'flex'}}>
            <Box sx={{width: '75%'}}>
                <CourseProgram programs={LESSONS}/>
            </Box>
            <Box sx={{width: '50%'}}>
                <MainCourseBlock/>
            </Box>
            <Box sx={{background: 'green', width: '25%'}}>
                <CourseDescription/>
            </Box>
        </Box>

    );
};

export default Subject;
