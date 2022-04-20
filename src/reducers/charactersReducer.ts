import { Reducer } from "@reduxjs/toolkit";
import { CharacterActions } from "../actions/characterActions";
import Character from "../types/character.types";

export type CharactersState = {
  // search: string;
  // selectedCharacter: null;
  // favCharacter: [];
  characters: Character[];
  status: "IDLE" | "LOADING" | "COMPLETED" | "FAILED";
  errorMessage: string | null;
};

const initialState: CharactersState = {
  // search: "",
  // selectedCharacter: null,
  // favCharacter: [],
  characters: [],
  status: "IDLE",
  errorMessage: null,
};

const charactersReducer: Reducer<CharactersState, CharacterActions> = (
  state = initialState,
  action
): CharactersState => {
  switch (action.type) {
    case "FETCH_CHARACTERS_PENDING":
      return {
        ...state,
        status: "LOADING",
        characters: [],
        errorMessage: null,
      };
    case "FETCH_CHARACTERS_SUCCESS":
      return {
        ...state,
        status: "COMPLETED",
        characters: action.characters,
      };
    case "FETCH_CHARACTERS_FAILED":
      return {
        ...state,
        status: "FAILED",
        errorMessage: action.error,
      };
    default:
      return state;
  }
};

export default charactersReducer;
