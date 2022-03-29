import { Meta, Story } from '@storybook/react'
import { useState } from 'react'
import Button from '../Button/Button'
import FullScreenModal from './FullScreenModal'

const storyConfig: Meta = {
  title: 'Base/FullScreenModal',
  component: FullScreenModal,
  parameters: {
    componentSubtitle: 'A reusable fullscreen modal',
  },
}

const Modal: Story = () => {
  const [show, setShow] = useState(false)

  const handleBack = () => {
    setShow(false)
  }

  const handleShow = () => {
    setShow(true)
  }

  return (
    <>
      <Button onClick={handleShow}>show modal</Button>
      <FullScreenModal
        title="Example modal"
        onBackButtonClick={handleBack}
        show={show}
      >
        I am inside a modal
      </FullScreenModal>
    </>
  )
}

export default storyConfig
export { Modal }
