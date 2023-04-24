import { GetStaticProps, NextPage } from 'next';
import Layout from '../../components/Layout';
import Paragraph from '../../components/Paragraph';
import Banner from '../../pagesComponents/home/banner';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Flex, Column, PaddedSection } from '../../styles/common';
import Link from 'next/link';
import { Greeting } from '../../pagesComponents/home/styles';

const Home: NextPage = () => {
  const [t] = useTranslation('home');
  return (
    <>
      <Layout
        description={t('description')}
        title={t('title')}
        metaImages={[
          {
            url: 'https://carste.pl/img/profilepic.jpg',
            width: 500,
            height: 500,
            alt: 'Profile picture',
          },
        ]}
        >
        <PaddedSection>
          <Banner />
        </PaddedSection>
        <Flex>
          <Column>
            <PaddedSection>
              <Paragraph title={t('p1Title')} lead={t('p1Lead')}>
                <>
                  <p>{t('p11')}</p>
                  <p>{t('p12')}</p>
                  <p>{t('p13')}</p>
                </>
              </Paragraph>
            </PaddedSection>
            <PaddedSection>
              <Paragraph title={t('p2Title')} lead={t('p2Lead')}>
                <>
                  <Link href="/home">
                    <p>{t('p21')}</p>
                  </Link>
                  <a href="https://3kliks.com">
                    <p>{'3kliks'}</p>
                  </a>
                </>
              </Paragraph>
            </PaddedSection>
          </Column>
          <Greeting>Hello.</Greeting>
        </Flex>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || '', ['home', 'home-banner'])),
  },
});

export default Home;
