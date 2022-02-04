import api from '..';
import {
  GetCharactersProps,
  ResponseGetCharactersProps,
} from '../../@types/services.characters';

const { REACT_APP_API_KEY } = process.env;

export async function getCharacters({ offset }: GetCharactersProps) {
  try {
    const response = await api.get<ResponseGetCharactersProps>(
      `/characters?limit=8&offset=${offset}&apikey=${REACT_APP_API_KEY}`,
    );

    return response.data.data;
  } catch (error) {
    throw new TypeError('Erro ao buscar personagens');
  }
}
