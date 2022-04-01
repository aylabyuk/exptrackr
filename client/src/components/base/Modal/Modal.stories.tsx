import { Meta, Story } from '@storybook/react'
import { useState } from 'react'
import Button from '../Button/Button'
import ModalComponent from './Modal'

const storyConfig: Meta = {
  title: 'Base/ModalComponent',
  component: ModalComponent,
  parameters: {
    componentSubtitle: 'A reusable fullscreen modal',
  },
}

const Modal: Story = () => {
  const [modal, setModal] = useState<'info' | 'error' | 'success' | ''>('info')

  const handleClose = () => {
    setModal('')
  }

  const handleOpen = (type: 'info' | 'error' | 'success') => {
    setModal(type)
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        <Button onClick={() => handleOpen('error')}>show error modal</Button>
        <Button onClick={() => handleOpen('info')}>show info modal</Button>
        <Button onClick={() => handleOpen('success')}>
          show success modal
        </Button>
      </div>

      <ModalComponent
        type={modal || 'info'}
        message="I am inside a modal"
        onRequestClose={handleClose}
        show={!!modal}
      />
    </>
  )
}

export default storyConfig
export { Modal }
