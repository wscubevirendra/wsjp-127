import React from 'react'

export default function MovieCard(
    {
        thumbnail = "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop",
        title = "Dummy",
        rating = 0
    }
) {
    return (
        <div class="movie-card">
            <img src={thumbnail}
                alt="movie" />

            <div class="movie-content">
                <div class="movie-top">
                    <h3 class="movie-title">{title}</h3>
                    <span class="rating">{rating}/10</span>
                </div>
            </div>
        </div>
    )
}
