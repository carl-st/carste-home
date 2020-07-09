import React from 'react';
import theme from '../../styles/theme';
import { ParagraphContainer } from './styles';

type Props = {
  title: string;
  lead?: string;
  content: JSX.Element;
};

const Paragraph: React.FunctionComponent<Props> = ({
  title,
  lead,
  content,
}) => (
  <ParagraphContainer>
    <div>
      <h1>{title}</h1>
      {lead && <h2>{lead}</h2>}
      {content}
    </div>
  </ParagraphContainer>
);

export default Paragraph;
