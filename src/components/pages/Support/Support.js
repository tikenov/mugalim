import { Title, Text, Box, CopyButton, Button, Group } from '@mantine/core';
import { IconCheck, IconCopy } from '@tabler/icons-react';
import React from 'react';
import qr from '../../../images/qr.jpeg';
import './Support.scss';

const bankDetails = {
  company: 'ЧАСТНЫЙ «ФОНД РАЗВИТИЯ ЧЕЛОВЕЧЕСКОГО КАПИТАЛА QALAM HUMAN CAPITAL DEVELOPMENT»',
  address: 'Казахстан, Усть-Каменогорск, Набережная Имени Е.П.Славского, дом 16, кв/офис 203',
  bin: '210540032722',
  bank: 'АО "KaspiBank"',
  kbe: '18',
  bik: 'CASPKZKA',
  account: 'KZ70722S000008978648',
};

const Support = () => {
  return (
    <div className="page-container support page-enter">
      <Title order={1} className="page-title">Жобаны қолдау</Title>

      <Box className="support-content">
        <section className="support-quote">
          <blockquote>
            <Text size="lg" lh={1.8} mb="md">
              Мектептің жаны – мұғалім. Мұғалім қандай болса, мектеп сондай болмақшы. Яғни, 
              мұғалім білімді болса, ол мектептен балалар көбірек білім алып шықпақшы. Солай 
              болған соң, ең әуелі мектепке керегі – білімді, педагогика, методикадан хабардар, 
              жақсы оқыта білетін мұғалім.
            </Text>
            <cite className="accent">— Ахмет Байтұрсынұлы</cite>
          </blockquote>
        </section>

        <section className="support-qr">
          <div className="support-qr-content">
            <Text size="lg" lh={1.7} className="support-qr-text">
              Елімізге болашақта пайдалы ұлағатты ұстаздар шығару мақсатында жасалынып жатқан 
              жұмыстарға қол ұшын созуға ниет білдірсеңіз <span className="accent">QR</span>-ды сканерлеңіз:
            </Text>
            <Box className="qr-box">
              <img src={qr} alt="Төлем QR коды" width={220} height={220} className="qr-image" />
            </Box>
          </div>
        </section>

        <section className="support-bank">
          <Title order={2} className="section-title">Банк мәліметтері</Title>
          <Box className="bank-details">
            <div className="bank-row">
              <Text size="sm" c="dimmed" className="bank-label">Компания</Text>
              <Text size="sm" className="bank-value">{bankDetails.company}</Text>
            </div>
            <div className="bank-row">
              <Text size="sm" c="dimmed" className="bank-label">Адрес</Text>
              <Text size="sm" className="bank-value">{bankDetails.address}</Text>
            </div>
            <div className="bank-row">
              <Text size="sm" c="dimmed" className="bank-label">БИН (ИИН)</Text>
              <Text size="sm" className="bank-value" component="span">{bankDetails.bin}</Text>
              <CopyButton value={bankDetails.bin}>
                {({ copied, copy }) => (
                  <Button size="xs" variant="subtle" onClick={copy}>
                    {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
                  </Button>
                )}
              </CopyButton>
            </div>
            <div className="bank-row">
              <Text size="sm" c="dimmed" className="bank-label">Банк</Text>
              <Text size="sm" className="bank-value">{bankDetails.bank}</Text>
            </div>
            <div className="bank-row">
              <Text size="sm" c="dimmed" className="bank-label">КБе</Text>
              <Text size="sm" className="bank-value">{bankDetails.kbe}</Text>
            </div>
            <div className="bank-row">
              <Text size="sm" c="dimmed" className="bank-label">БИК</Text>
              <Text size="sm" className="bank-value">{bankDetails.bik}</Text>
            </div>
            <div className="bank-row bank-row-account">
              <Text size="sm" c="dimmed" className="bank-label">Номер счёта</Text>
              <Group gap="xs" wrap="nowrap" style={{ flex: 1 }}>
                <Text size="sm" className="bank-value account-number">{bankDetails.account}</Text>
                <CopyButton value={bankDetails.account}>
                  {({ copied, copy }) => (
                    <Button size="xs" variant="filled" color="#EAB32D" onClick={copy} leftSection={copied ? <IconCheck size={14} /> : <IconCopy size={14} />}>
                      {copied ? 'Көшірілді!' : 'Көшіру'}
                    </Button>
                  )}
                </CopyButton>
              </Group>
            </div>
          </Box>
        </section>
      </Box>
    </div>
  );
};

export default Support;
