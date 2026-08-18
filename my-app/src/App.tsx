import { Navigate, Route, Routes } from 'react-router-dom'
import { Landing } from './pages/Landing'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'
import { SlackConnect } from './pages/SlackConnect'
import { ConnectCallback } from './pages/ConnectCallback'
import { ConnectError } from './pages/ConnectError'
import { Home } from './pages/Home'
import { ConversationPicker } from './pages/ConversationPicker'
import { ComposeBaton } from './pages/ComposeBaton'
import { BranchPrep } from './pages/BranchPrep'
import { SendConfirm } from './pages/SendConfirm'
import { BatonDetail } from './pages/BatonDetail'
import { PendingResponse } from './pages/PendingResponse'
import { ResultConfirm } from './pages/ResultConfirm'
import { SyncError } from './pages/SyncError'
import { Settings } from './pages/Settings'

function App() {
  return (
    <Routes>
      <Route element={<Landing />} path="/" />
      <Route element={<Signup />} path="/signup" />
      <Route element={<Login />} path="/login" />
      <Route element={<SlackConnect />} path="/connect" />
      <Route element={<ConnectCallback />} path="/connect/callback" />
      <Route element={<ConnectError />} path="/connect/error" />
      <Route element={<Home />} path="/home" />
      <Route element={<ConversationPicker />} path="/conversations" />
      <Route element={<ComposeBaton />} path="/conversations/:conversationId/compose" />
      <Route element={<BranchPrep />} path="/conversations/:conversationId/branches" />
      <Route element={<SendConfirm />} path="/conversations/:conversationId/confirm" />
      <Route element={<BatonDetail />} path="/batons/:batonId" />
      <Route element={<PendingResponse />} path="/batons/:batonId/pending" />
      <Route element={<ResultConfirm />} path="/batons/:batonId/result" />
      <Route element={<SyncError />} path="/sync-error" />
      <Route element={<Settings />} path="/settings" />
      <Route element={<Navigate replace to="/" />} path="*" />
    </Routes>
  )
}

export default App
