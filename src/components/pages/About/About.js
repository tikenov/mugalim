import { Title, Text, Box, List } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './About.scss';

const About = () => {
  return (
    <div className="page-container about page-enter">
      <Title order={1} className="page-title">Жоба туралы</Title>

      <Box className="about-content">
        <section>
          <Text size="lg" lh={1.8} mb="md">
            <strong>Мұғалім Өскемен</strong> — бұл болашақ мұғалімдерді даярлауға арналған стипендиялық бағдарлама. 
            Біз жоғары білімді, педагогика және методикадан хабардар мұғалімдер шығаруға көмектесу арқылы 
            саналы қоғамның қалыптасуына үлес қосуды көздейміз.
          </Text>
        </section>

        <section>
          <Title order={2} className="section-title">Мақсатымыз</Title>
          <List spacing="sm" className="goals-list">
            <List.Item>Педагог мамандарды даярлауға қолдау көрсету</List.Item>
            <List.Item>Студенттерді оқу тәжірибесі мен даму мүмкіндіктерімен қамтамасыз ету</List.Item>
            <List.Item>Білім беру мекемелерімен серіктестік құру</List.Item>
            <List.Item>Семинарлар мен оқу сабақтарын ұйымдастыру</List.Item>
          </List>
        </section>

        <section>
          <Title order={2} className="section-title">Негізгі құндылықтар</Title>
          <div className="values-grid">
            <Box className="value-card">
              <Text fw={700} mb={4}>Білім</Text>
              <Text size="sm" c="dimmed">Сапалы білім беру — біздің негізгі міндетіміз</Text>
            </Box>
            <Box className="value-card">
              <Text fw={700} mb={4}>Серіктестік</Text>
              <Text size="sm" c="dimmed">Мектептер мен қорлармен бірлесіп жұмыс жасаймыз</Text>
            </Box>
            <Box className="value-card">
              <Text fw={700} mb={4}>Қолдау</Text>
              <Text size="sm" c="dimmed">Стипендиаттарға жан-жақты көмек көрсетеміз</Text>
            </Box>
          </div>
        </section>

        <Box className="about-cta">
          <Text mb="md">Бағдарламаға қатысқыңыз келсе, тіркеліңіз:</Text>
          <Link to="/register" className="btn btn-primary">Жобаға тіркелу</Link>
        </Box>
      </Box>
    </div>
  );
};

export default About;
