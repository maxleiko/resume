export default {
  name: {
    first: 'Maxime',
    last: 'Tricoire',
  },
  position: 'Ingénieur fullstack',
  birth: {
    year: 1988,
    location: 'Poitiers (86)',
  },
  experiences: [
    {
      company: 'Mission pour DataThings S.à.r.l',
      location: 'Rennes (35) / Luxembourg',
      position: 'Freelance / Auto-entrepreneur',
      timeperiod: 'Du 1er Août 2018 au 5 Octobre 2018',
      description: "Développement d'une SPA de gestion de serveurs GreyCat",
    },
    {
      company: 'INRIA / Orange Labs',
      location: 'Rennes (35)',
      position: 'Ingénieur de recherche',
      timeperiod: 'Septembre 2017 - Juin 2018',
      description:
        "Participation à la mise en place d'une toolchain permettant la diversification de projet Maven/NPM à l'aide de Docker. Approche basée sur des mutations à différents niveaux (tests, dépendances, sources, etc)",
    },
    {
      company: 'INRIA / HEADS (Projet Européen)',
      location: 'Rennes (35) / U.E',
      position: 'Ingénieur de recherche',
      timeperiod: 'Aout 2013 - Septembre 2017',
      description: `
        Poursuite du développement de <a href="http://kevoree.org" target="_blank">Kevoree</a>, 
        un framework de gestion de systèmes distribués, hétérogènes et reconfigurables 
        (approche models@runtime).
        <br/>
        <ul>
          <li>Intégration complète de Kevoree à JavaScript (<strong>Node.js</strong> et <strong>Browser</strong>)</li>
          <li>Création d'une SPA permettant de créer des noeuds Kevoree directement dans un navigateur (<em>(dé-)chargement des scripts à l'éxecution</em>)</li>
          <li>Création d'un registre de modèles via Spring-boot</li>
        </ul>`,
      website: 'http://heads-project.eu',
    },
    {
      company: 'INRIA',
      location: 'Rennes (35)',
      position: 'Stagiaire développement Android',
      timeperiod: 2012,
      description: `
        Création d'une application <strong>Android</strong> dans le cadre du projet DAUM 
        pour le SDIS d'Ille-et-Vilaine afin de gérer des cartes de déploiements tactiques (SITAC).
        <br/>
        <ul>
          <li>Mise en place du partage de modèles Kevoree via WebSocket: P2P & star networks</li>
          <li>Utilisation de Kevoree pour gérer le côté hautement distribué/hétérogène (inter-connections entre Arduino/Raspberry/Cloud Servers)</li>
        </ul>`,
    },
  ],
  teaching: [
    {
      name: 'Techniques Avancées de Construction d\'Architecture Logiciel',
      timeperiod: 'Septembre 2013 - Décembre 2018',
      school: 'ISTIC, Université Rennes I (35)',
      level: 'Master 2',
      description: 'Keywords: Composants, OSGi, Spring-Boot, Angular, ORM, JavaFX, Programmation Orienté Aspect',
    },
    {
      name: 'Conception à base d\'approche orientée objet',
      timeperiod: 'Septembre 2013 - Décembre 2018',
      school: 'ISTIC, Université Rennes I (35)',
      level: 'Master 2',
      description: 'Keywords: Patron de conception, JavaFX, dead-locks, threading, tests unitaires & intégration',
    },
    {
      name: 'Analyse et Conception Objet',
      timeperiod: 'Septembre 2013 - Décembre 2013',
      school: 'ISTIC, Université Rennes I (35)',
      level: 'Master 1',
      description: 'Keywords: Patron de conception, UML, tests unitaires & intégration',
    },
  ],
  educations: [
    {
      degree: 'Master Informatique - Génie Logiciel',
      timeperiod: 'Septembre 2011 - Juin 2013',
      description: 'ISTIC, Université Rennes I',
      location: 'Rennes (35)',
    },
    {
      degree: 'Licence Informatique - Génie Logiciel',
      timeperiod: 'Septembre 2010 - Juin 2011',
      description: 'Université de Bretagne Sud',
      location: 'Vannes (56)',
    },
    {
      degree: 'DUT Informatique',
      timeperiod: 'Septembre 2007 - Juin 2010',
      description: 'IUT, Université de Bretagne Sud',
      location: 'Vannes (56)',
    },
    {
      degree: 'BAC S',
      timeperiod: 2006,
      location: 'Bressuire (79)',
    },
  ],
  publications: [
    {
      name: 'Multitier Diversification in Web-Based Software Applications',
      description: 'IEEE Software ( Volume: 32, Issue: 1, Jan.-Feb. 2015 )',
      url: 'https://ieeexplore.ieee.org/abstract/document/6957484/',
    },
    {
      name: 'KevoreeJS: Enabling Dynamic Software Reconfigurations in the Browser',
      description: '2016 19th International ACM SIGSOFT Symposium on Component-Based Software Engineering (CBSE)',
      url: 'https://ieeexplore.ieee.org/abstract/document/7497430/',
    },
  ],
  skills: [
    {
      name: 'Java',
    },
    {
      name: 'JavaScript',
    },
    {
      name: 'Node.js',
    },
    {
      name: 'React.js',
    },
    {
      name: 'TypeScript',
    },
    {
      name: 'ES.Next',
    },
    {
      name: 'Angular.js',
    },
    {
      name: 'Docker',
    },
    {
      name: 'Angular 5',
    },
    {
      name: 'Android',
    },
    {
      name: 'Spring-boot',
    },
    {
      name: 'Linux',
    },
  ],
  contact: {
    email: 'max.tricoire _at_ gmail.com',
    phone: '06 80 13 56 65',
    street: '6 Rue De Châteaudun',
    city: 'Rennes',
    github: 'maxleiko',
  },
  about: ['Anglais: lu, parlé et écrit', 'Espagnol: notions'],
  lang: 'fr',
};
