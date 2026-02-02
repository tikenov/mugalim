import { Title, Text, Box, SimpleGrid } from '@mantine/core';
import {
  IconCash,
  IconBuilding,
  IconUsers,
  IconPresentation,
  IconSchool,
  IconTrendingUp,
  IconCheck,
} from '@tabler/icons-react';
import React from 'react';
import { Link } from 'react-router-dom';
import './Participants.scss';

const benefits = [
  { icon: IconCash, label: 'Стипендия төлемі' },
  { icon: IconBuilding, label: 'Оқу ғимараттарын пайдалану мүмкіндігі' },
  { icon: IconUsers, label: 'Тәжірибелі мамандармен жұмыс істеу' },
  { icon: IconPresentation, label: 'Семинарлар мен оқу сабақтарына қатысу' },
  { icon: IconSchool, label: 'Педагогикалық тәжірибе алу' },
  { icon: IconTrendingUp, label: 'Қарьера дамытуға көмек' },
];

const requirements = [
  'Педагог мамандығы бойынша оқу',
  'Өскемен қаласында немесе өңірде тұру',
  'Оқуға қызығушылық пен белсенділік',
];

const Participants = () => {
  return (
    <div className="page-container participants page-enter">
      <header className="participants-hero">
        <Title order={1} className="page-title">Қатысушыларға</Title>
        <Text className="hero-subtitle" size="lg">
          <strong>Мұғалім Өскемен</strong> бағдарламасы — мұғалім мамандығын таңдаған студенттерге
          арналған. Оқу тәжірибесі, семинарлар және мамандармен жұмыс мүмкіндіктерін ұсынамыз.
        </Text>
      </header>

      <div className="participants-layout">
        <section className="participants-section participants-benefits">
          <Title order={2} className="section-title">
            Артықшылықтар
          </Title>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md" className="benefits-grid">
            {benefits.map(({ icon: Icon, label }, i) => (
              <div key={i} className="benefit-card">
                <div className="benefit-icon">
                  <Icon size={24} stroke={1.5} />
                </div>
                <Text fw={500} size="sm">{label}</Text>
              </div>
            ))}
          </SimpleGrid>
        </section>

        <section className="participants-section participants-requirements">
          <Title order={2} className="section-title">
            Қойылатын талаптар
          </Title>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md" className="requirements-grid">
            {requirements.map((req, i) => (
              <div key={i} className="requirement-item">
                <IconCheck size={18} className="requirement-check" />
                <Text size="sm">{req}</Text>
              </div>
            ))}
          </SimpleGrid>
        </section>
      </div>

      <section className="page-cta participants-cta">
        <Text className="cta-text">Бағдарламаға қосылғыңыз келсе</Text>
        <Link to="/register" className="btn btn-primary">
          Жобаға тіркелу
        </Link>
      </section>
    </div>
  );
};

export default Participants;
