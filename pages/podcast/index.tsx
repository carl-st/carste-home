import { GetStaticProps, NextPage } from 'next';
import Layout from '../../components/Layout';
import Paragraph from '../../components/Paragraph';
import PlayersBar from '../../components/PlayersBar';
import Banner from '../../pagesComponents/podcast/banner';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import {
  DesktopPlayersContainer,
  MobilePlayersContainer,
  PaddedSection,
  YouTubeIframe,
} from '../../styles/common';

const Podcast: NextPage = () => {
  const [t] = useTranslation('podcast');

  return (
    <Layout
      title={t('title')}
      description={t('description')}
      metaImages={[
        {
          url: 'https://carste.pl/img/podcast-banner.png', // TODO: Change based on language
          alt: 'Podcast banner',
        },
      ]}
    >
      <Banner />
      <PaddedSection>
        <Paragraph title={t('p1title')} lead={t('p1description')}>
          <>
            <p>{t('p11')}</p>
            <p>{t('p12')}</p>
          </>
        </Paragraph>
        <Paragraph title={t('p2title')} lead={t('p2description')}>
          <>
            <p>{t('p21')}</p>
            <DesktopPlayersContainer>
              <YouTubeIframe
                src="https://www.youtube.com//embed/videoseries?list=PLk10pO-PdzF7sEeUecFUWE4QpgydS-msR"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
              ></YouTubeIframe>
            </DesktopPlayersContainer>
            <MobilePlayersContainer>
              <PlayersBar />
            </MobilePlayersContainer>
          </>
        </Paragraph>
        <Paragraph title={t('p3title')} lead={t('p3description')}>
          <>
            <p>{t('p31')}</p>
            <DesktopPlayersContainer>
              <YouTubeIframe
                src="https://www.youtube.com//embed/videoseries?list=PLk10pO-PdzF6Cu5uSkuF0xSxNA5HAJdc8"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
              ></YouTubeIframe>
            </DesktopPlayersContainer>
          </>
        </Paragraph>
      </PaddedSection>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || '', [
      'podcast',
      'podcast-banner',
    ])),
  },
});

export default Podcast;
