import presentations from './slides/01-presentation.mdx';
import intro from './slides/02-intro.mdx';
import map from './slides/03-map.mdx';
import filter from './slides/04-filter.mdx';
import reduce from './slides/05-reduce.mdx';
import combined from './slides/06-combined.mdx';
import finalNotes from './slides/07-final-notes.mdx';
import credits from './slides/08-credits.mdx';
export {default as theme} from './themes/default';
export default [
  ...presentations,
  ...intro,
  ...map,
  ...filter,
  ...reduce,
  ...combined,
  ...finalNotes,
  ...credits,
];
