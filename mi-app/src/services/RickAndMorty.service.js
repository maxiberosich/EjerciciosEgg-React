import { API_RM } from "../constant/Api.constants";

class RickAndMortyService {

    async getAllCharacters() {
        const response = await fetch(API_RM.CHARACTERS());
        //INTERCEPTOR
        return response.json();
    }
    
    async getCharacterById(id) {
        const response = await fetch(API_RM.CHARACTER_BY_ID(id));
        //INTERCEPTOR
        return response.json();
    }

}

export default new RickAndMortyService();