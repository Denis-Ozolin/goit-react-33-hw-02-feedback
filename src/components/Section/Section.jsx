import PropTypes from 'prop-types';
import { StatisticsSection } from './Section.styled';

export const Section = ({ title, children }) => (
  <StatisticsSection>
    <h2>{title}</h2>
    {children}
  </StatisticsSection>
);

Section.propTypes = {
  title: PropTypes.string,
};
