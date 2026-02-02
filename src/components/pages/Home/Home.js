import { Text, Title, Box } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  const stats = [
    { title: 'Стипендиаттар', value: '70+', desc: 'Білім алушылар' },
    { title: 'Түлектер', value: '20+', desc: 'Жұмыс істеуші мұғалімдер' },
    { title: 'Серіктестік', value: '10+', desc: 'Бірлесіп жұмыс жасаймыз' },
    { title: 'Қорлармен байланыс', value: '20+', desc: 'Ынтымақтастық' },
    { title: 'Семинарлар', value: '25+', desc: 'Ұйымдастырылған' },
  ];

  return (
    <div className="page-container home page-enter">
      <section className="hero">
        <Title order={1} className="hero-title">
          Біз болашақ мұғалімдердің жаңа буынын құру арқылы{' '}
          <span className="accent">саналы қоғамның</span> қалыптасуына үлес қосамыз.
        </Title>
      </section>

      <section className="cta-section">
        <Box className="cta-buttons">
          <Link to="/register" className="btn btn-primary">Жобаға тіркелу</Link>
          <Link to="/support" className="btn btn-secondary">Жобаны қолдау</Link>
        </Box>
      </section>

      <section className="stats-section">
        <Title order={2} className="section-title">Миссиямыз</Title>
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.title} className="stat-card">
              <Text className="stat-value">{stat.value}</Text>
              <Text className="stat-title">{stat.title}</Text>
              {stat.desc && <Text size="xs" className="stat-desc">{stat.desc}</Text>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
