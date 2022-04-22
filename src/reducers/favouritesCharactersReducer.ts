import { Reducer } from "@reduxjs/toolkit";
import { FavouritesAction } from "../actions/favouritesAction";
import Character from "../types/character.types";

export interface FavCharactersState {
  favouritesMapa: Character[];
}

const initialState: FavCharactersState = {
  favouritesMapa: [],
};

const favouritesCharactersReducer: Reducer<
  FavCharactersState,
  FavouritesAction
> = (state = initialState, action): FavCharactersState => {
  switch (action.type) {
    case "TOGGLE_FAV":
      let map = state.favouritesMapa;

      const found = map.find((char) => char.id === action.character.id);
      if (found) {
        map = state.favouritesMapa.filter(
          (char) => char.id !== action.character.id
        );
      } else {
        map.push(action.character);
      }
      return { ...state, favouritesMapa: map };

    case "CLEAN_FAV":
      return { ...state, favouritesMapa: [] };
    default:
      return state;
  }
};
export default favouritesCharactersReducer;
