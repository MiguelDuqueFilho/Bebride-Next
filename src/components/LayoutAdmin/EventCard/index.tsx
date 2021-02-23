import { Box, Typography, Avatar, makeStyles } from '@material-ui/core';
import { useStyles } from './styles';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useRouter } from 'next/router';
import Image from 'next/image';

// dayjs.extend(relativeTime);

function EventCard({ item }) {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Box>
      <img
        width={500}
        height={300}
        alt={item.title}
        src={item.fileLocation}
        className={classes.img}
        // layout="intrinsic"
        // onClick={() =>
        //   router.push({
        //     pathname: '/events/[id]',
        //     query: { id: item.id }
        //   })
        // }
      />
      <Box display="flex" mt="1">
        <Box mr={2}>
          <Avatar alt="time" src={item.fileLocation}>
            SS
          </Avatar>
        </Box>
        <Box>
          <Typography
            className={classes.caption}
            gutterBottom
            variant="body1"
            color="textPrimary"
          >
            {item.title}
          </Typography>
          <Typography display="block" variant="body2" color="textSecondary">
            {item.content}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {`${item.status} • ${dayjs(item.eventDate)}`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default EventCard;
