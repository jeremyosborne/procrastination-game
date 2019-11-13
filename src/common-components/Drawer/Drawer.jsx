import React from 'react'

type Props = {
  initialState?: boolean,
}

export const Drawer = ({
  initialState = false,
}: Props = {}) => {
  const [open, setOpen] = React.useState(initialState)

  return (
    <div onClick={() => setOpen(!open)}>
      {open ? <div>Open Drawer</div> : <div>Closed Drawer</div>}
    </div>
  )
}

export default Drawer
