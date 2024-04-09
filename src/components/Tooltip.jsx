import  {useState} from 'react'

export const Tooltip = (text, children) => {
    const [visible, setVisible] = useState(false);
  return (
  <>
    <div className='tooltipContainer'
    onMouseEnter={()=> setVisible(true)}
    onMouseLeave={()=> setVisible(true)}
    >
        {children}
        {visible && <div className="tooltip">
          {text}
        </div>}
    </div>
    </>
  )
}
