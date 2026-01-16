import Container from '@mui/material/Container';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { useMediaQuery } from '@mui/material';

export default function AlternateReverseTimeline() {
  const timelineItems = [
    {
      time: '2025 - Present',
      title:
        'Web Developer at The Thai Chamber of Commerce and Board of Trade of Thailand',
      description:
        'Revamped the organization website, improving user experience and performance using NuxtJs.',
    },
    {
      time: '2024 - 2025',
      title: 'Full Stack Developer at Xsurface Co., Ltd.',
      description:
        'Developed and maintained an E-commerce web applications using MERN Stacks.',
    },
    {
      time: '2019 - 2024',
      title: 'Procurement Supervisor at Southland Rubber Co., Ltd.',
      description:
        'Data analytics on raw material purchasing and inventory management.',
    },
  ];

  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Container className='text-center'>
      <h4 className='text-center mb-2 text-lg font-ovo'>My working </h4>
      <h2 className='text-center text-5xl font-ovo'>Experiences</h2>
      <Timeline
        position={isMobile ? 'right' : 'alternate'}
        className='my-20'
        sx={{
          '& .MuiTimelineItem-missingOppositeContent:before': {
            display: isMobile ? 'none' : undefined,
          },
        }}
      >
        {timelineItems.map((item, index) => (
          <TimelineItem key={index} class='hidden md:block'>
            <TimelineSeparator>
              <TimelineDot />
              {index < timelineItems.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent className='flex flex-col gap-4'>
              <h3 className='text-xl font-bold'>{item.title}</h3>
              <span className='text-gray-500'>{item.time}</span>
              <p>{item.description}</p>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  );
}
