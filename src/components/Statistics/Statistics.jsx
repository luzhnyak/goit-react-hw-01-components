import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ stats, title = 'Upload stats' }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css['stat-list']}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={`${css.item} ${css[label.slice(1, label.length)]}`}
            key={id}
          >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.array,
  title: PropTypes.string,
};
