import * as React from 'react';
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import avatar from './avatar.jpg';
import ContactItem from './components/ContactItem';
import Section from './components/Section';
import resume from './data/resume';
import Experience from './components/Experience';
import Publication from './components/Publication';
import Education from './components/Education';

const styles = createStyles({
  root: {
    display: 'flex',
    width: 940,
    margin: 'auto',
  },
  leftPanel: {
    width: '30%',
    backgroundColor: '#222',
    color: 'rgba(255, 255, 255, 0.54)',
    padding: 10,
  },
  avatar: {
    width: '100%',
  },
  leftBlock: {
    padding: '15px',
    '& h3': {
      color: '#ccc',
      letterSpacing: 2,
      textTransform: 'uppercase',
      fontSize: 14,
    }
  },
  rightBlock: {
    flexGrow: 1,
    position: 'relative',
    backgroundColor: 'white',
    padding: 20,
    marginTop: 5,
    marginBottom: 5,
  },
  rightPanel: {
    display: 'flex',
    flexFlow: 'column',
    flexGrow: 1,
    padding: 15,
  },
  heading: {
    textTransform: 'uppercase',
    padding: 20,
    '& h1': {
      display: 'block',
      fontSize: '1.17em',
      color: 'rgba(0, 0, 0, 0.7)',
      margin: 0,
      letterSpacing: 6,
      fontWeight: 400,
    },
    '& h2': {
      margin: 0,
      padding: 0,
      lineHeight: '15pt',
      fontWeight: 500,
      letterSpacing: 3,
      color: 'rgba(63, 61, 60, 0.71)',
      display: 'block',
      fontSize: '10pt',
      paddingTop: 0,
      opacity: 0.8,
    }
  },
});


class App extends React.Component<WithStyles<typeof styles>> {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Paper className={classes.leftPanel} elevation={4} square>
          <img src={avatar} className={classes.avatar} alt="Avatar" />
          <div className={classes.leftBlock}>
            <h3>Contact</h3>
            <ContactItem icon="fa fa-home" lines={['6 Rue De Châteaudun', 'Rennes (35)']} />
            <ContactItem icon="fa fa-phone" lines={['06.80.13.56.65']} />
            <ContactItem icon="far fa-envelope" lines={['max.tricoire@gmail.com']} />
            <ContactItem icon="fab fa-github" lines={['@maxleiko', 'https://github.com/maxleiko']} />
          </div>
          <div className={classes.leftBlock}>
            <h3>Compétences</h3>
            <ContactItem icon="fa fa-globe-americas" lines={['Anglais (lu, parlé et écrit)', 'Espagnol (notions)']} />
            <ContactItem icon="fa fa-code" lines={['JavaScript, TypeScript, Java, Kotlin, C/C++, HTML5, CSS3']} />
            <ContactItem icon="fa fa-pencil-alt" lines={['UML, MDE, Reactive/Functional Programming']} />
            <ContactItem icon="fa fa-database" lines={['MongoDB, Oracle, Postgres, MariaDB, Redis']} />
            <ContactItem icon="fa fa-sitemap" lines={['WebSocket, WebRTC, MQTT']} />
          </div>
          <div className={classes.leftBlock}>
            <h3>Open-Source</h3>
            <ContactItem icon="fab fa-github-alt" lines={['npmi']} />
            <ContactItem icon="fab fa-github-alt" lines={['Kevoree', 'Kevoree Modeling', 'Kevoree ClassLoader']} />
            <ContactItem icon="fab fa-github-alt" lines={['GreyCat']} />
          </div>
        </Paper>
        <div className={classes.rightPanel}>
          <div className={classes.heading}>
            <h1>{resume.name.first} {resume.name.last}</h1>
            <h2>{resume.position}</h2>
          </div>
          <Section icon="fas fa-briefcase" title="Expérience Professionnelle">
            {resume.experiences.map((c, i) => <Experience key={i} {...c} />)}
          </Section>
          <Section icon="fas fa-graduation-cap" title="Publications Scientifiques">
            {resume.publications.map((p, i) => <Publication key={i} {...p} />)}
          </Section>
          <Section icon="fas fa-user-graduate" title="Formation">
            {resume.educations.map((e, i) => <Education key={i} {...e} />)}
          </Section>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
