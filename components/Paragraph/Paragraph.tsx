import React from 'react';
import theme from '../../styles/theme';

type Props = {
    title: string,
    lead: string,
    content: JSX.Element
}

const Paragraph: React.FunctionComponent<Props> = ({ title, lead, content }) => (
  <>
    <style jsx global>{`
      .paragraph-container {
        background-color: ${theme.colors.darkShades};
        color: white;
      }

      span {
        margin-right: 4px;
      }
    `}</style>
    <div className="paragraph-container">
        <div className="description-container">
          <h1>{title}</h1>
          <h2>{lead}</h2>
          {content}
        </div>
    </div>
  </>
);

export default Paragraph;
