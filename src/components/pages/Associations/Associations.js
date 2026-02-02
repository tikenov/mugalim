import { Title, Text, Box } from '@mantine/core';
import React from 'react';
import './Associations.scss';
import nurorda from '../../../images/nurorda.png';
import dostyk from '../../../images/dostyk.png';
import nis from '../../../images/nis.jpg';
import asar_ume from '../../../images/asar_ume.png';

const partners = [
  {
    name: 'НАЗАРБАЕВ ЗИЯТКЕРЛІК МЕКТЕБІ',
    logo: nis,
    url: 'https://ukk.nis.edu.kz/',
    alt: 'NIS логотипі',
  },
  {
    name: '«НҰРОРДА» МЕКТЕП-ЛИЦЕЙІ',
    logo: nurorda,
    url: 'https://nurordaoskemen.edu.kz/',
    alt: 'Нұрорда логотипі',
  },
  {
    name: '«ДОСТЫҚ» БІЛІМ БЕРУ ОРТАЛЫҒЫ',
    logo: dostyk,
    url: 'https://www.instagram.com/dostyq.oskemen/',
    alt: 'Достық логотипі',
  },
  {
    name: 'ASARUME STORE',
    logo: asar_ume,
    url: null,
    alt: 'Asarume логотипі',
  },
];

const Associations = () => {
  return (
    <div className="page-container associations page-enter">
      <Title order={1} className="page-title">Бірлестіктер</Title>

      <Box className="associations-intro">
        <Text size="lg" lh={1.8}>
          <span className="accent">Мұғалім Өскемен</span> жобасымен бірлесіп серіктестік мақсатында 
          студенттерге жан-жақты қолдау көрсетеміз: оқу ғимараттарын пайдалануға, мамандармен жұмыс 
          жасауға, оқу тәжірибесімен бөлісуге және студенттерді тәжірибелік даму мақсатында қолдаймыз.
        </Text>
      </Box>

      <div className="partners-grid">
        {partners.map((partner) => (
          <div key={partner.name} className="partner-card">
            {partner.url ? (
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="partner-link"
              >
                <img src={partner.logo} alt={partner.alt} className="partner-logo" />
                <Text fw={700} size="sm" ta="center" className="partner-name">
                  {partner.name}
                </Text>
              </a>
            ) : (
              <div className="partner-link partner-link-disabled">
                <img src={partner.logo} alt={partner.alt} className="partner-logo" />
                <Text fw={700} size="sm" ta="center" className="partner-name">
                  {partner.name}
                </Text>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Associations;
