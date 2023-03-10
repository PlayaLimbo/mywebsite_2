import React, { useState } from "react";

import { useRouter } from "next/router";

const img_src = `https://image.tmdb.org/t/p/w500/irwQcdjwtjLnaA0iErabab9PrmG.jpg`;

class Rectangle {
    constructor(movies, genres) {
        this.movies = movies;
        this.genres = genres;
    }
    getIds(arr = []) {
        return arr.map((el) => el.id);
    }
    getNames() {
        return this.genres.map((el) => el.name);
    }
    filterMovies(target = Number, getIds = Boolean) {
        if (getIds) {
            return this.getIds(
                this.movies.filter(({ genre_ids }) =>
                    genre_ids.includes(target)
                )
            );
        }
        return this.movies.filter(({ genre_ids }) =>
            genre_ids.includes(target)
        );
    }
    genresMap() {
        return this.genres.map(({ id }) =>
            this.filterMovies(this.movies, id, true)
        );
    }
    moviesByGenre() {
        const names = this.getNames(this.genres);
        const obj = {};
        const m = this.genresMap(this.genres, this.movies); //[[]]
        for (let i = 0; i < m.length; i++) {
            const element = m[i];
            const currentKey = names[i];
            obj[currentKey] = element;
        }
        return obj;
    }
}

export { Rectangle };
