import { Box, Grid } from '@material-ui/core';
import LayoutAdmin from '../../components/LayoutAdmin';
import EventCard from '../../components/LayoutAdmin/EventCard';
import api from '../../services/api';

function Admin({ data }) {
  // const data = {
  //   events: [
  //     {
  //       id: 1,
  //       title: 'Antonio e Maria',
  //       content: 'Casamento Antonio e Maria',
  //       status: 'Initial',
  //       fileLocation:
  //         'https://bebride-bucket-prod.s3.amazonaws.com/2e28a8e0595e6bcc6798e5b8f40cc4b9-team_400x400.png',
  //       initialDate: '2021-01-01T00:00:00.000Z',
  //       eventDate: '2021-02-13T13:21:00.000Z',
  //       finishDate: '2021-03-30T00:00:00.000Z',
  //       fileKey: '2e28a8e0595e6bcc6798e5b8f40cc4b9-team_400x400.png'
  //     }
  //   ],
  //   totalItems: 1,
  //   totalPages: 0.5,
  //   currentPage: 1
  // };
  console.log(` Admin data`);
  console.log(data);

  return (
    <div>
      <LayoutAdmin title="Administração - Be Bride">
        <Box p={2}>
          <Grid container spacing={4}>
            {data.events.map(item => (
              <Grid key={item.id} item xl={3} lg={3} md={4} sm={6} xs={12}>
                <EventCard item={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </LayoutAdmin>
    </div>
  );
}

export async function getStaticProps() {
  const response = await api.get('/api/events');
  console.log(`response.data`);
  console.log(response.data);

  // const data = {
  //   events: [
  //     {
  //       id: 1,
  //       title: 'Antonio e Maria',
  //       content: 'Casamento Antonio e Maria',
  //       status: 'Initial',
  //       fileLocation:
  //         'https://bebride-bucket-prod.s3.amazonaws.com/2e28a8e0595e6bcc6798e5b8f40cc4b9-team_400x400.png',
  //       initialDate: '2021-01-01T00:00:00.000Z',
  //       eventDate: '2021-02-13T13:21:00.000Z',
  //       finishDate: '2021-03-30T00:00:00.000Z',
  //       fileKey: '2e28a8e0595e6bcc6798e5b8f40cc4b9-team_400x400.png'
  //     },
  //     {
  //       id: 2,
  //       title: 'Antonio e Maria',
  //       content: 'Casamento Antonio e Maria',
  //       status: 'Initial',
  //       fileLocation:
  //         'https://bebride-bucket-prod.s3.amazonaws.com/2e28a8e0595e6bcc6798e5b8f40cc4b9-team_400x400.png',
  //       initialDate: '2021-01-01T00:00:00.000Z',
  //       eventDate: '2021-02-13T13:21:00.000Z',
  //       finishDate: '2021-03-30T00:00:00.000Z',
  //       fileKey: '2e28a8e0595e6bcc6798e5b8f40cc4b9-team_400x400.png'
  //     },
  //     {
  //       id: 3,
  //       title: 'Antonio e Maria',
  //       content: 'Casamento Antonio e Maria',
  //       status: 'Initial',
  //       fileLocation:
  //         'https://bebride-bucket-prod.s3.amazonaws.com/2e28a8e0595e6bcc6798e5b8f40cc4b9-team_400x400.png',
  //       initialDate: '2021-01-01T00:00:00.000Z',
  //       eventDate: '2021-02-13T13:21:00.000Z',
  //       finishDate: '2021-03-30T00:00:00.000Z',
  //       fileKey: '2e28a8e0595e6bcc6798e5b8f40cc4b9-team_400x400.png'
  //     },
  //     {
  //       id: 4,
  //       title: 'Antonio e Maria',
  //       content: 'Casamento Antonio e Maria',
  //       status: 'Initial',
  //       fileLocation:
  //         'https://bebride-bucket-prod.s3.amazonaws.com/2e28a8e0595e6bcc6798e5b8f40cc4b9-team_400x400.png',
  //       initialDate: '2021-01-01T00:00:00.000Z',
  //       eventDate: '2021-02-13T13:21:00.000Z',
  //       finishDate: '2021-03-30T00:00:00.000Z',
  //       fileKey: '2e28a8e0595e6bcc6798e5b8f40cc4b9-team_400x400.png'
  //     }
  //   ],
  //   totalItems: 1,
  //   totalPages: 0.5,
  //   currentPage: 1
  // };

  return {
    props: {
      // data: JSON.parse(JSON.stringify(data))
      data: response.data
    }, // will be passed to the page component as props
    revalidate: 15
  };
}

export default Admin;
