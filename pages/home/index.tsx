import { GetStaticProps, NextPage } from 'next';
import Layout from '../../components/Layout';
import Paragraph from '../../components/Paragraph';
import Banner from '../../pagesComponents/home/banner';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { PaddedSection } from '../../styles/common';

const Home: NextPage = () => {
  const [t] = useTranslation('home');
  return (
    <>
      <Layout
        description={t("description")}
        title="Karol Stępień - Senior Full Stack Engineer"
        metaImages={[
          {
            url: 'https://carste.pl/img/profilepic.jpg',
            width: 500,
            height: 500,
            alt: 'Profile picture',
          },
        ]}
      >
        <Banner />
        <PaddedSection>
          <Paragraph title={t("pTitle")} lead={t("pLead")}>
            <>
              <p>{t('p1')}</p>
              <p>{t('p2')}</p>
              <p>{t('p3')}</p>
            </>
          </Paragraph>
        </PaddedSection>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale || 'pl', ['home']),
  },
})

export default Home;
