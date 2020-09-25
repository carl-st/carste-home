import { NextPage } from 'next';
import Layout from '../../components/Layout';
import Paragraph from '../../components/Paragraph';
import PlayersBar from '../../components/PlayersBar';
import Banner from '../../pagesComponents/podcast/banner';
import { useTranslation } from '../../i18n';
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
      title={t("title")}
      description={t("description")}
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
            <p> {t('p12')}</p>
          </>
        </Paragraph>
        <Paragraph title={t('p2title')} lead={t('p2description')}>
          <>
            <p>{t('p21')}</p>
            <DesktopPlayersContainer>
              <YouTubeIframe
                width="300"
                src="https://www.youtube.com/embed/fL2EdWlXlZg"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
              ></YouTubeIframe>
              <YouTubeIframe
                width="300"
                src="https://www.youtube.com/embed/GXyxQrxvm9w"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
              ></YouTubeIframe>
              <YouTubeIframe
                width="300"
                src="https://www.youtube.com/embed/ak7qIGLwjkg"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
              ></YouTubeIframe>
              <YouTubeIframe
                width="300"
                src="https://www.youtube.com/embed/8ExZxu3yiTE"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
              ></YouTubeIframe>
              <YouTubeIframe
                width="300"
                src="https://www.youtube.com/embed/-Yjnsvj1dUg"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
              ></YouTubeIframe>
              <YouTubeIframe
                width="300"
                src="https://www.youtube.com/embed/86yIzvUJdsI"
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
                width="300"
                src="https://www.youtube.com/embed/bznmSm4aOz8"
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

Podcast.getInitialProps = async () => ({
  namespacesRequired: ['podcast'],
});

export default Podcast;
