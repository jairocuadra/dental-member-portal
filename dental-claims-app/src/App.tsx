import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import PageTitle from './components/PageTitle'
import MemberSelector from './components/MemberSelector'
import ClaimsList from './components/ClaimsList'
import { claims, members } from './data/mockData'

function App() {
  // Set David Anderson (id: '1') as the default selected member
  const [selectedMemberId, setSelectedMemberId] = useState('1')

  // Filter claims based on selected member (in a real app)
  // For now, we'll just show all claims since our mock data is for one member
  const filteredClaims = claims

  return (
    <>
      {/* Header placed completely outside any container */}
      <Header />
      
      {/* Main content in a centered container */}
      <div className="content-container-centered">
        <main style={{ padding: '0 0 24px' }}>
          <PageTitle title="Most recent claims" />
          
          <div style={{ padding: '0 16px' }}>
            <MemberSelector 
              members={members}
              selectedMemberId={selectedMemberId}
              onSelectMember={setSelectedMemberId}
            />
            
            <ClaimsList claims={filteredClaims} />
          </div>
        </main>
      </div>
    </>
  )
}

export default App
