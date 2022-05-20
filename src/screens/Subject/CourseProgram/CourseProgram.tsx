import React, {FC} from 'react';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckIcon from '@mui/icons-material/Check';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Typography from '@mui/material/Typography';
import {StyledTimeline, StyledTimelineDot, StyledTimelineItem, StyledTimelineSeparator} from "../CourseStyles";

const ICONS = {
    pendingLesson: <CircleOutlinedIcon fontSize={"small"}/>,
    done: <CheckIcon fontSize={"small"}/>,
    exam: <ListAltIcon fontSize={"small"}/>,
}

export type statusType = "done" | "pendingLesson" | "exam"

type lessonType = {
    title: string
    id: number
    name: string
    status: statusType
}

type CourseProgramPropsType = {
    programs: lessonType[]
}

const CourseProgram: FC<CourseProgramPropsType> = ({programs}) => {

    return (
        <StyledTimeline>
            {programs.map(({name, status, title}: lessonType, index: number, arr) => (
                <StyledTimelineItem status={status}>

                    <StyledTimelineSeparator index={index} arrLength={arr.length}>
                        <TimelineConnector/>
                        <StyledTimelineDot status={status}>
                            {status && ICONS[status]}
                        </StyledTimelineDot>
                        <TimelineConnector/>
                    </StyledTimelineSeparator>

                    <TimelineContent sx={{padding: "18px 16px 6px 16px"}}>
                        <Typography sx={{fontWeight: "600"}} component="span">
                            {title}
                        </Typography>
                        <Typography>{name}</Typography>
                    </TimelineContent>

                </StyledTimelineItem>
            ))}
        </StyledTimeline>
    );
};

export default CourseProgram;
