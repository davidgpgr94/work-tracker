import { SelectProjectTask } from '../SelectProjectTask/SelectProjectTask';

export const CurrentWorkInputs = () => {
  return (
    <div className="current-work__inputs">
      <input type="text" className="working-on" placeholder="What are you working on?" />
      <SelectProjectTask />
    </div>
  )
}
