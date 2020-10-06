import { useState } from 'react'


interface Props<T> {
  cancel?: () => void
  confirm: (data: T) => void
}

const useConfirmation = <T>({ cancel, confirm }: Props<T>) => {
  const [isOpen, setOpen] = useState(false)
  const [data, setData] = useState<T>(Object)

  const onExecute = (data: T) => {
    setOpen(true)
    setData(data)
  }

  const onCancel = () => {
    setOpen(false)
    cancel && cancel()
  }

  const onConfirm = () => {
    setOpen(false)
    confirm(data)
  }

  return {
    isOpen,
    onExecute,
    onCancel,
    onConfirm,
    data,
  }
}

export default useConfirmation