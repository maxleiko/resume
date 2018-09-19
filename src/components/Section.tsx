import * as React from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const styles = createStyles({
  root: {
    display: 'flex',
    flexFlow: 'column',
    margin: '10px 0',
  },
  heading: {
    display: 'flex',
    paddingLeft: 10,
  },
  icon: {
    lineHeight: '35px',
    fontSize: 20,
    paddingRight: 15,
  },
  title: {
    lineHeight: '35px',
    textTransform: 'uppercase',
    letterSpacing: 3,
    fontWeight: 500,
    color: '#3f3d3c',
  },
});

export interface ISectionProps extends WithStyles<typeof styles> {
  icon: string;
  title: string;
}

class Section extends React.Component<ISectionProps> {

  render() {
    const { icon, title, classes, children } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.heading}>
          <span className={classes.icon}>
            <i className={icon} />
          </span>
          <Typography className={classes.title}>{title}</Typography>
        </div>
        {children}
      </div>
    );
  }
}

export default withStyles(styles)(Section);