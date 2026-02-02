import { Title, Accordion, Box } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './Faq.scss';

const faqItems = [
  {
    question: 'Мұғалім Өскемен деген не?',
    answer: 'Мұғалім Өскемен — болашақ мұғалімдерді даярлауға арналған стипендиялық бағдарлама. Біз студенттерге оқу тәжірибесі, семинарлар және мамандармен жұмыс мүмкіндіктерін ұсынамыз.',
  },
  {
    question: 'Қалай тіркелуге болады?',
    answer: 'Тіркелу үшін бізбен байланысыңыз: телефон (+7 776 088 06 01), электронды пошта (mugalimoskemen@gmail.com) немесе Instagram (@mugalim.oskemen) арқылы.',
    linkTo: '/contacts',
    linkText: 'Байланыс беті',
  },
  {
    question: 'Қандай талаптар қойылады?',
    answer: 'Негізгі талаптар: педагог мамандығы бойынша оқу, Өскемен өңірінде тұру және оқуға қызығушылық. Толық ақпарат үшін «Қатысушыларға» бетін қараңыз.',
  },
  {
    question: 'Жобаны қалай қолдауға болады?',
    answer: 'Жобаны қаржылық қолдау көрсету үшін «Жобаны қолдау» бетіндегі банк мәліметтерін пайдаланыңыз. Сондай-ақ QR-кодты сканерлеу арқылы да қосылуға болады.',
  },
  {
    question: 'Бірлестіктер деген кім?',
    answer: 'Бірлестіктер — бізбен бірге жұмыс жасайтын білім беру мекемелері: Назарбаев зияткерлік мектебі, Нұрорда мектеп-лицейі, Достық білім беру орталығы және басқалар. Толық тізім «Бірлестіктер» бетінде.',
  },
];

const Faq = () => {
  return (
    <div className="page-container faq page-enter">
      <Title order={1} className="page-title">Жиі қойылатын сұрақтар</Title>

      <Box className="faq-content">
        <Accordion
          variant="separated"
          radius="md"
          className="faq-accordion"
          defaultValue="faq-0"
        >
          {faqItems.map((item, i) => (
            <Accordion.Item key={i} value={`faq-${i}`}>
              <Accordion.Control>{item.question}</Accordion.Control>
              <Accordion.Panel>
                {item.answer}
                {item.linkTo && (
                  <> <Link to={item.linkTo}>{item.linkText}</Link></>
                )}
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>

        <Box className="faq-cta">
          <Title order={3} size="h4" mb="sm">Тағы сұрақтарыңыз бар ма?</Title>
          <Link to="/contacts" className="btn btn-primary">Бізбен байланысыңыз</Link>
        </Box>
      </Box>
    </div>
  );
};

export default Faq;
