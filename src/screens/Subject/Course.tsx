import React from 'react';
import Box from "@mui/material/Box";
import CourseProgram, {statusType} from "./CourseProgram/CourseProgram";
import MainCourseBlock from "./MainCourseBlock/MainCourseBlock";
import CourseDescription from "./CourseDescription/CourseDescription";

const LESSONS = [
    {
        title: "Урок 1",
        id: 1,
        name: 'Название урока',
        status: 'done' as statusType ,
    },
    {
        title: "Урок 2",
        id: 2,
        name: 'Название урока 2',
        status: 'done' as statusType,
    },
    {
        title: "Урок 3",
        id: 3,
        name: 'Название урока',
        status: 'pendingLesson' as statusType,
    },
    {
        title: "Урок 4",
        id: 34,
        name: 'Название урока',
        status: 'pendingLesson' as statusType,
    },
    {
        title: "Экзамен",
        id: 35,
        name: 'Название урока',
        status: 'exam' as statusType,
    },
]

const Course = () => {
    return (
        <Box sx={{display: 'flex'}}>
            <Box sx={{width: '25%'}}>
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

export default Course;
