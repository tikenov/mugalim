import { Title, Text, Box, Alert } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';
import React from 'react';
import { Link } from 'react-router-dom';
import './Register.scss';

const Register = () => {
  return (
    <div className="page-container register page-enter">
      <Title order={1} className="page-title">Жобаға тіркелу</Title>

      <Box className="register-content">
        <Alert
          icon={<IconInfoCircle size={20} />}
          title="Тіркелу ақпараты"
          variant="light"
          color="blue"
          mb="xl"
        >
          Бағдарламаға тіркелу үшін бізбен байланысыңыз. Біз сіздің сұрақтарыңызға жауап береміз 
          және қажетті құжаттар туралы ақпарат береміз.
        </Alert>

        <section>
          <Title order={2} className="section-title">Байланыс тәсілдері</Title>
          <div className="contact-methods">
            <a href="tel:+77760880601" className="contact-card">
              <Text fw={700} size="lg">Телефон</Text>
              <Text size="md" c="dimmed">+7 776 088 06 01</Text>
            </a>
            <a href="mailto:mugalimoskemen@gmail.com" className="contact-card">
              <Text fw={700} size="lg">Электронды пошта</Text>
              <Text size="md" c="dimmed">mugalimoskemen@gmail.com</Text>
            </a>
            <a
              href="https://www.instagram.com/mugalim.oskemen/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <Text fw={700} size="lg">Instagram</Text>
              <Text size="md" c="dimmed">@mugalim.oskemen</Text>
            </a>
          </div>
        </section>

        <Box className="register-note">
          <Text size="sm" c="dimmed">
            Жеке келу: Өскемен қаласы, Жеңіс даңғылы 9.
          </Text>
        </Box>

        <Box className="register-cta">
          <Link to="/contacts" className="btn btn-primary">Байланыс бетіне өту</Link>
        </Box>
      </Box>
    </div>
  );
};

export default Register;
