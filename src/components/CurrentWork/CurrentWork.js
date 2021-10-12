import { CurrentWorkAction } from './CurrentWorkAction';
import { CurrentWorkInputs } from './CurrentWorkInputs';
import { CurrentWorkTime } from './CurrentWorkTime';

export const CurrentWork = () => {
  return (
    <section className="current-work">
      <CurrentWorkInputs />
      <CurrentWorkTime />
      <CurrentWorkAction />
    </section>
  )
}
