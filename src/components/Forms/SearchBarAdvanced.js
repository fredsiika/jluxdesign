import React from 'react'
import { Link } from 'react-router-dom'
import './Forms.css'
// import styled from 'styled-components'

const SearchBarAdvanced = () => {
  return (
    <div className="input-group rounded-pill bg-white overflow-hidden p-2 mb-6">
      <input 
        type="search" 
        class="form-control form-control-sm rounded-pill border-0 mr-1"
        placeholder="Search for custom stone and tile"
        aria-label="Search for custom stone and tile"
      />
      <div class="input-group-append">
        <button 
          type="button"
          class="btn btn-sm btn-primary rounded-pill font-weight-medium px-4 py-2 mr-2">
          Products
        </button>
        <button 
          type="button"
          class="btn btn-sm btn-primary rounded-pill font-weight-medium px-4 py-2">
          Services
        </button>
      </div>
    </div>
  )
}

export default SearchBarAdvanced
