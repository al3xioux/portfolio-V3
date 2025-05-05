import React from 'react'

const Documentation = () => {
  return (
    <div className='documentation'>
      <h3>Documentation</h3>
      <div className='documentation-section'>
        <p onClick={() => window.open('/gamehub.pdf')}><i class="fa-solid fa-folder"></i>  GAMEHUB</p>
        <p onClick={() => window.open('/zqsd.pdf')}><i class="fa-solid fa-folder"></i>  ZQSD</p>
        <p onClick={() => window.open('/projet_bibliotheque.pdf')}><i class="fa-solid fa-folder"></i>  BIBLIO V2</p>
        <p onClick={() => window.open('/inventaire.pdf')}><i class="fa-solid fa-folder"></i>  Inventaire</p>
        <p onClick={() => window.open('/glpi.pdf')}><i class="fa-solid fa-folder"></i>  GLPI</p>
        <p onClick={() => window.open('/mind_techno.pdf')}><i class="fa-solid fa-folder"></i>  Mind Techno</p>
        <p onClick={() => window.open('/boxy.pdf')}><i class="fa-solid fa-folder"></i>  Boxy</p>
        <p onClick={() => window.open('/doc-bot-merch.pdf')}><i class="fa-solid fa-folder"></i>  Bot Merch</p>

      </div>
    </div>
  )
}

export default Documentation