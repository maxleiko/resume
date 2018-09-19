import * as React from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/core';

const styles = createStyles({
  root: {
    display: 'flex',
    padding: '5px',
  },
  iconContainer: {
    width: 30,
    textAlign: 'center',
    paddingRight: 10,
    flexShrink: 0,
    paddingTop: 2,
  },
  list: {
    padding: 0,
    listStyleType: 'none',
    margin: 0,
  }
});

export interface IContactItemProps extends WithStyles<typeof styles> {
  icon: string;
  lines: string[];
}

class ContactItem extends React.Component<IContactItemProps> {

  render() {
    const { icon, lines, classes } = this.props;

    return (
      <div className={classes.root}>
        <span className={classes.iconContainer}>
          <i className={icon} />
        </span>
        <ul className={classes.list}>
          {lines.map((line, i) => <li key={i}>{line}</li>)}
        </ul>
      </div>
    );
  }
}

export default withStyles(styles)(ContactItem);