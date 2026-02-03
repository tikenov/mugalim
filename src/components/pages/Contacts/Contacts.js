import { Title, Text, Box } from '@mantine/core';
import { IconPhone, IconMail, IconMapPin, IconBrandInstagram } from '@tabler/icons-react';
import React from 'react';
import './Contacts.scss';

const contactItems = [
  {
    icon: IconPhone,
    label: 'Телефон',
    value: '+7 776 088 06 01',
    href: 'tel:+77760880601',
  },
  {
    icon: IconMail,
    label: 'Электронды пошта',
    value: 'mugalimoskemen@gmail.com',
    href: 'mailto:mugalimoskemen@gmail.com',
  },
  {
    icon: IconMapPin,
    label: 'Мекенжай',
    value: 'Өскемен қаласы, Жеңіс даңғылы 9',
    href: null,
  },
  {
    icon: IconBrandInstagram,
    label: 'Instagram',
    value: '@mugalim.oskemen',
    href: 'https://www.instagram.com/mugalim.oskemen/',
  },
];

const Contacts = () => {
  return (
    <div className="page-container contacts page-enter">
      <Title order={1} className="page-title">Байланыс</Title>

      <Box className="contacts-content">
        <Text size="lg" lh={1.7} mb="xl">
          Бізбен байланысу үшін төмендегі мәліметтерді пайдаланыңыз. Сұрақтарыңызға жауап береміз.
        </Text>

        <div className="contacts-grid">
          {contactItems.map((item) => {
            const Icon = item.icon;
            const content = (
              <>
                <Box className="contact-icon">
                  <Icon size={24} stroke={1.5} />
                </Box>
                <Text size="sm" c="dimmed" className="contact-label">
                  {item.label}
                </Text>
                <Text fw={600} className="contact-value">
                  {item.value}
                </Text>
              </>
            );

            if (item.href) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="contact-card"
                >
                  {content}
                </a>
              );
            }

            return (
              <div key={item.label} className="contact-card contact-card-static">
                {content}
              </div>
            );
          })}
        </div>
      </Box>
    </div>
  );
};

export default Contacts;
