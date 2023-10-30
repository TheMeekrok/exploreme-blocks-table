import './style.css'

export function Loading() {
  return (
    <div className='loading-holder'>
      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  ) 
}