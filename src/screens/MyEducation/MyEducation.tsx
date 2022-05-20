import React from 'react';
import CourseCard from "../Courses/CourseCard/CourseCard";
import Box from "@mui/material/Box";

const MyEducation = () => {
    return (
        <div>
            <Box sx={{mb: 2}}>
                <CourseCard/>
            </Box>
            <Box sx={{mb: 2}}>
                <CourseCard/>
            </Box>
            <Box sx={{mb: 2}}>
                <CourseCard/>
            </Box>
            <Box sx={{mb: 2}}>
                <CourseCard/>
            </Box>
        </div>
    );
};

export default MyEducation;
