import { ActionIcon, Group } from '@mantine/core';
import { IconBrandInstagram } from '@tabler/icons-react';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        <div className="footer-text">
          <strong>Мұғалім Өскемен</strong> — Стипендиялық бағдарлама
        </div>
        <Group gap="sm" className="footer-links">
          <a
            href="https://www.instagram.com/mugalim.oskemen/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram парақшасы"
          >
            <ActionIcon size="lg" variant="subtle" color="#051d3f" className="footer-icon">
              <IconBrandInstagram stroke={2} size={26} />
            </ActionIcon>
          </a>
          <Link to="/contacts" className="footer-link">
            Байланыс
          </Link>
          <Link to="/support" className="footer-link">
            Қолдау көрсету
          </Link>
        </Group>
      </div>
    </footer>
  );
};

export default Footer;
