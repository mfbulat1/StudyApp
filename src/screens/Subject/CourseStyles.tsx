import React from 'react';
import TimelineSeparator, {TimelineSeparatorProps} from "@mui/lab/TimelineSeparator";
import {styled} from "@mui/material/styles";
import Timeline, {TimelineProps} from "@mui/lab/Timeline/Timeline";
import TimelineItem, {TimelineItemProps} from "@mui/lab/TimelineItem";
import TimelineDot, {TimelineDotProps} from "@mui/lab/TimelineDot";
import {statusType} from "./CourseProgram/CourseProgram";

type StyledTimelineSeparatorPropsType = {
    index: number,
    arrLength: number,
} & TimelineSeparatorProps

export const StyledTimeline = styled(Timeline)<TimelineProps>(() => ({
    cursor: 'pointer',
    '& :before': {display: "none"},
    padding: 0,
}))

export const StyledTimelineItem = styled(TimelineItem)<TimelineItemProps & { status: statusType }>(({theme, status}) => ({
    borderRadius: '5px',
    padding: '0 10px',
    color: theme.palette.grey['500'],
    transition: '0.3s',
    '&:hover': {
        background: theme.palette.grey['300'],
        color: theme.palette.grey['700'],
    },
    '& .MuiTimelineConnector-root': {
        background: status === 'done' ? theme.palette.success.light : '#bdbdbd',
    }
}))

export const StyledTimelineSeparator = styled(TimelineSeparator)<StyledTimelineSeparatorPropsType>(
    ({index, arrLength}) => ({
        '& span:first-child': {
            maxHeight: 15,
            background: index === 0 && 'transparent',
        },
        '& span:last-child': {
            background: index === arrLength-1 && 'transparent',
        }
    }))

export const StyledTimelineDot = styled(TimelineDot)<TimelineDotProps & { status: statusType }>(({theme, status}) => ({
    margin: 0,
    borderStyle: "none",
    background: status === 'done' ? theme.palette.success.light : '#bdbdbd',
}))
