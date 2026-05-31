import React from 'react'

export default function Search({ search, setSearch }) {
    return (
        <header class="header">
            <div class="search-box">
                <input onChange={(e) => setSearch(e.target.value)} value={search} type="text" placeholder="Search movies..." />
            </div>
        </header>
    )
}
