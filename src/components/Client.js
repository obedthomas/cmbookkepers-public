import React from 'react'

const Client = ({ clientName, clientImg, link }) => {
  return (
    <div
      className="mr-2 d-inline-block rounded-lg p-2"
      style={{ backgroundColor: 'white' }}
    >
      {/* eslint-disable-next-line */}
      <a href={link} className="text-decoration-none" target="_blank">
        <div className="card-img-top">
          <img src={clientImg} alt={clientName} className="img-fluid" />
        </div>
      </a>
    </div>
  )
}

export default Client
