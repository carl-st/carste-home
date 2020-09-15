import Layout from '../../components/Layout/Layout';
import Paragraph from '../../components/Paragraph/Paragraph';
import PlayersBar from '../../components/IconBar/PlayersBar';
import Banner from '../../pagesComponents/podcast/banner';
import { NextSeo } from 'next-seo';
import { ReactElement } from 'react';
import {
  DesktopPlayersContainer,
  MobilePlayersContainer,
  PaddedSection,
  YouTubeIframe,
} from '../../styles/styles.common';
import { NextPage } from 'next';

const paragraphContent: ReactElement = (
  <>
    <p>
      Commit, React, Deployment, CI/CD, Fullstack... Branża IT pełna jest
      trudnych nazw, zapożyczeń oraz skrótów, w których bardzo łatwo się
      pogubić. Każdy odcinek wyjaśnia kilka z nich, nawet jeżeli są uważane za
      podstawowe. Posłuchaj niezależnie od tego czy Twoja przygoda z
      programowaniem się zaczyna, masz już trochę doświadczenia, czy może po
      prostu chcesz zrozumieć o co chodzi tym wszystkim nerdom!
    </p>
    <p>Juź dostępny!</p>
  </>
);

const podcastsParagraphContent: ReactElement = (
  <>
    <p>
      Glosariusz Programisty świetnie sprawdza się w codziennej podróży do
      pracy, podczas wieczornego spaceru, a także jako opowieść na dobranoc!
    </p>
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
);

const presentationParagraphContent: ReactElement = (
  <>
    <p>
      Glosariusz Programisty to nie tylko podkast w formie audio. To także
      nadchodząca seria prezentacji wyjaśniających informatyczny żargon oraz
      nazwy własne. Każda prezentacja to również zbiór dobrych praktyk i
      ciekawostek związanych z danymi słowami kluczowymi!
    </p>
    <DesktopPlayersContainer>
      <YouTubeIframe
        width="300"
        src="https://www.youtube.com/embed/bznmSm4aOz8"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
      ></YouTubeIframe>
    </DesktopPlayersContainer>
  </>
);

const Podcast: NextPage = () => (
  <Layout
    title="Glosariusz Programisty - zrozum żargon IT"
    description="Commit, React, Deployment, CI/CD, Fullstack... Branża IT pełna jest
  trudnych nazw, zapożyczeń oraz skrótów, w których bardzo łatwo się
  pogubić. Każdy odcinek podkastu wyjaśnia kilka z nich, nawet jeżeli są uważane za podstawowe!"
    metaImages={[
      {
        url: 'https://carste.pl/img/podcast-banner.png',
        alt: 'Podcast banner',
      },
    ]}
  >
    <Banner />
    <PaddedSection>
      <Paragraph
        title="Glosariusz Programisty"
        lead="Zrozum żargon IT"
        content={paragraphContent}
      />
      <Paragraph
        title="Posłuchaj"
        lead="Forma audio na każdą wolną chwilę"
        content={podcastsParagraphContent}
      />
      <Paragraph
        title="Zobacz"
        lead="Prezentacje dla lepszej wizualizacji problemu"
        content={presentationParagraphContent}
      />
    </PaddedSection>
  </Layout>
);

export default Podcast;
