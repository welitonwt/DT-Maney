import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay } from './styles'
import { X } from 'phosphor-react'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title className="DialogTitle">New Transaction</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form>
          <input type="text" placeholder="Description" required></input>
          <input type="number" placeholder="Price" required></input>
          <input type="text" placeholder="Category" required></input>
          <button type="submit">Register</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
