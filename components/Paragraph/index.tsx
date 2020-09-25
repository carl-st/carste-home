import React, { ComponentType, ReactChild } from 'react';
import { ParagraphContainer } from './styles';

type Props = {
  title: string;
  lead?: string;
  children: ReactChild;
};

const Paragraph: ComponentType<Props> = ({
  title,
  lead,
  children
}) => (
  <ParagraphContainer>
    <div>
      <h1>{title}</h1>
      {lead && <h2>{lead}</h2>}
      {children}
    </div>
  </ParagraphContainer>
);

export default Paragraph;
