import React, {FC} from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, {TimelineItemProps} from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot, {TimelineDotProps} from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckIcon from '@mui/icons-material/Check';
import Typography from '@mui/material/Typography';
import {styled} from "@mui/material/styles";
import MuiListItemButton, {ListItemButtonBaseProps} from "@mui/material/ListItemButton";
import {TimelineProps} from "@mui/lab/Timeline/Timeline";

export const StyledTimeline = styled(Timeline)<TimelineProps>(() => ({
    cursor: 'pointer',
    '& :before': {display: "none"},
    padding: 0,
}))

export const StyledTimelineItem = styled(TimelineItem)<TimelineItemProps & { status: string }>(({theme, status}) => ({
    padding: '0 10px',
    color: theme.palette.grey['500'],
    '&:hover': {
        background: theme.palette.grey['300'],
        color: theme.palette.grey['700'],
    },
    '& .MuiTimelineConnector-root': {
        background: status === 'done' ? theme.palette.success.light : '#bdbdbd',
    }
}))

export const StyledTimelineDot = styled(TimelineDot)<TimelineDotProps & { status: string }>(({theme, status}) => ({
    margin: 0,
    borderStyle: "none",
    background: status === 'done' ? theme.palette.success.light : '#bdbdbd',
}))

const CourseProgram: FC<any> = ({programs}) => {
    return (
        <StyledTimeline>
            {programs.map(({title, status, number}: any) => (
                <StyledTimelineItem status={status}>
                    <TimelineSeparator>
                        <TimelineConnector/>
                        <StyledTimelineDot status={status}>
                            {status === 'done'
                                ? <CheckIcon fontSize={"small"}/>
                                : <CircleOutlinedIcon fontSize={"small"}/>
                            }
                        </StyledTimelineDot>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography sx={{fontWeight: "600"}} component="span">
                            Урок {number}
                        </Typography>
                        <Typography>{title}</Typography>
                    </TimelineContent>
                </StyledTimelineItem>
            ))}
        </StyledTimeline>
    );
};

export default CourseProgram;
