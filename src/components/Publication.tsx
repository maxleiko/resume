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
    '& p': {
      marginTop: 20,
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

type Props = typeof resume.publications[0] & WithStyles<typeof styles>;

class Publication extends React.Component<Props> {

  render() {
    const { name, description, url, classes } = this.props;

    return (
      <Card className={classes.content} elevation={3} square>
        <CardContent className={classes.innerContent}>
          <div className={classes.contentHeader}>
            <Typography component="h1">{name}</Typography>
          </div>
          <div className={classes.contentHeader}>
            <Typography component="h2">{description}</Typography>
          </div>
          <Typography component="p">
            <a href={url} target="_blank">{url}</a>
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Publication);