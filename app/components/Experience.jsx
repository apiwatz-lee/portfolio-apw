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
      time: 'May 2025 - Present',
      title:
        'Web Developer at The Thai Chamber of Commerce and Board of Trade of Thailand',
      description:
        'Revamped and modernized the organization’s main website using Nuxt.js, focusing on performance optimization, responsive design, and improved user experience.',
    },
    {
      time: 'Jan 2024 - May 2025',
      title: 'Full Stack Developer at Xsurface Co., Ltd.',
      description:
        'Developed and maintained scalable E-commerce web applications using the MERN stack (MongoDB, Express.js, React, Node.js).Implemented authentication, API integrations, and optimized application performance for real-world business use.',
    },
    {
      time: 'Jun 2023 - Oct 2023',
      title: 'TechUp Bootcamp - Full Stack Web Development Student',
      description:
        'Completed an intensive full-stack web development bootcamp covering front-end and back-end technologies, including HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. Built multiple projects to demonstrate practical skills and understanding of web development concepts.',
    },
    {
      time: 'Sep 2019 - Jun 2023',
      title: 'Procurement Supervisor at Southland Rubber Co., Ltd.',
      description:
        'Led procurement operations and performed data analysis on raw material purchasing and inventory management to improve cost efficiency and decision-making. Gained strong business domain knowledge that later supported my transition into software development.',
    },
  ];

  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Container id='experiences' className='text-center'>
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
          <TimelineItem key={index} className='hidden md:block'>
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
