import Button from "../Button"
import "./Taskbar.css"
import WindowsStartIcon from "/icons/start.png"

const Taskbar = () => {
  return (
    <div className="Taskbar">
      <Button text="Start" icon={WindowsStartIcon} className="button_start" />
    </div>
  )
}

export default Taskbar
