import { IoEllipsisVertical, IoAdd } from 'react-icons/io5';
import GreenCheckmark from './GreenCheckmark';

export default function ModuleControlButtons() {
  return (
    <div className="module-control-buttons float-end">
      <GreenCheckmark />
      <IoAdd className="fs-4" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
