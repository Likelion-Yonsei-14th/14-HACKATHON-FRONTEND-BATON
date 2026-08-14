import { useState } from 'react'
import './App.css'

import { Landing } from './pages/Landing'
import { PlatformConnect } from './pages/PlatformConnect'
import { Setup } from './pages/Setup'
import { Home } from './pages/Home'
import { ConversationPicker } from './pages/ConversationPicker'
import { ConversationViewer } from './pages/ConversationViewer'
import { ComposeMessage } from './pages/ComposeMessage'
import { BranchEditor } from './pages/BranchEditor'
import { FinalConfirm } from './pages/FinalConfirm'
import { WaitingDetail } from './pages/WaitingDetail'
import { SyncError } from './pages/SyncError'
import { ConnectError } from './pages/ConnectError'
import { ResultConfirm } from './pages/ResultConfirm'
import { PendingResponse } from './pages/PendingResponse'
import { History } from './pages/History'
import { Settings } from './pages/Settings'
import { Modal } from './components/Modal'

function App() {
  const [view, setView] = useState('landing')
  const [modal, setModal] = useState(null)
  const [selectedBranch, setSelectedBranch] = useState('A')

  const screens = {
    landing: <Landing setView={setView} />,
    platform: <PlatformConnect setModal={setModal} setView={setView} />,
    setup: <Setup setView={setView} />,
    home: <Home setView={setView} />,
    conversations: <ConversationPicker setView={setView} />,
    viewer: <ConversationViewer setView={setView} />,
    compose: <ComposeMessage setView={setView} />,
    branches: <BranchEditor setView={setView} />,
    confirm: <FinalConfirm setView={setView} />,
    waiting: <WaitingDetail setView={setView} />,
    syncError: <SyncError setView={setView} />,
    connectError: <ConnectError setView={setView} />,
    result: <ResultConfirm setView={setView} />,
    pending: (
      <PendingResponse
        selectedBranch={selectedBranch}
        setModal={setModal}
        setSelectedBranch={setSelectedBranch}
        setView={setView}
      />
    ),
    history: <History setView={setView} />,
    settings: <Settings setView={setView} />,
  }

  return (
    <>
      {screens[view]}
      <Modal modal={modal} setModal={setModal} setView={setView} />
    </>
  )
}

export default App
