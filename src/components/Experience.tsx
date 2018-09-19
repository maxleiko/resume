import * as React from 'react';
import { WithStyles, createStyles, withStyles, Card, CardContent, Typography } from '@material-ui/core';
import resume from '../data/resume';

const styles = createStyles({
  content: {
    margin: '6px 0',
    '& h1': {
      fontWeight: 500,
      fontSize: 15,
      color: 'rgba(0, 0, 0, 0.9)',
    },
    '& h2': {
      fontWeight: 400,
      fontSize: 14,
      color: 'rgba(0, 0, 0, 0.7)',
    },
    '& h3': {
      fontWeight: 400,
      fontSize: 13,
      color: 'rgba(0, 0, 0, 0.6)',
    },
    '& a': {
      marginTop: 5,
    },
    '& p': {
      marginTop: 20,
    },
    '& ul': {
      margin: '5px 0',
      paddingLeft: 25,
    }
  },
  innerContent: {
    '&:last-child': {
      paddingBottom: 16,
    },
  },
  contentHeader: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

type Props = typeof resume.experiences[0] & WithStyles<typeof styles>;

class Experience extends React.Component<Props> {

  render() {
    const { company, timeperiod, location, position, description, website, classes } = this.props;

    return (
      <Card className={classes.content} elevation={3} square>
        <CardContent className={classes.innerContent}>
          <div className={classes.contentHeader}>
            <Typography component="h1">{company}</Typography>
            <Typography component="h3">{timeperiod}</Typography>
          </div>
          <div className={classes.contentHeader}>
            <Typography component="h2">{position}</Typography>
            <Typography component="h3">{location}</Typography>
          </div>
          {website && (
            <div className={classes.contentHeader}>
              <Typography component="h3">
                <a href={website} target="_blank">{website}</a>
              </Typography>
            </div>
          )}
          <Typography component="p" align="justify" dangerouslySetInnerHTML={{ __html: description }} />
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Experience);