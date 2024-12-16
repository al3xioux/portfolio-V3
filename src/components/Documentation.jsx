import React from 'react'

const Documentation = () => {
  return (
    <div className='documentation'>
      <h3>Documentation</h3>
      <div className='documentation-section'>
        <p onClick={() => window.location.href = '/doc-gamehub.zip'}><i class="fa-solid fa-folder"></i>  GAMEHUB</p>
        <p onClick={() => window.location.href = '/doc-mind.zip'}><i class="fa-solid fa-folder"></i>  Mind Technologies</p>
        <p onClick={() => window.location.href = '/doc-biblio.zip'}><i class="fa-solid fa-folder"></i>  BIBLIO V2</p>
        <p onClick={() => window.location.href = '/doc-glpi.zip'}><i class="fa-solid fa-folder"></i>  GLPI</p>
      </div>
    </div>
  )
}

export default Documentation