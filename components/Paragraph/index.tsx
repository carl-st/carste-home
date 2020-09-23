import React, { ComponentType } from 'react';
import { ParagraphContainer } from './styles';

type Props = {
  title: string;
  lead?: string;
  content: JSX.Element;
};

const Paragraph: ComponentType<Props> = ({
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
