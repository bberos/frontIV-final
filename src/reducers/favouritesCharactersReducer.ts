import { Reducer } from "@reduxjs/toolkit";
import { FavouritesAction } from "../actions/favouritesAction";
import Character from "../types/character.types";

export interface FavCharactersState {
  // favoritos: Personaje[];
  favoritosMapa: Map<number, Character>;
}

const initialState: FavCharactersState = {
  // favoritos: [],
  favoritosMapa: new Map(),
};

const favouritesCharactersReducer: Reducer<
  FavCharactersState,
  FavouritesAction
> = (state = initialState, action): FavCharactersState => {
  switch (action.type) {
    case "TOGGLE_FAV":
      const map = new Map<number, Character>();
      state.favoritosMapa.forEach((character) => {
        map.set(character.id, character);
      });

      const found = state.favoritosMapa.has(action.character.id);
      if (found) {
        map.delete(action.character.id);
      } else {
        map.set(action.character.id, action.character);
      }

      return { ...state, favoritosMapa: map };
    case "CLEAN_FAV":
      // return {...state, favoritos: []}
      return { ...initialState };
    default:
      return state;
  }
};
export default favouritesCharactersReducer;
