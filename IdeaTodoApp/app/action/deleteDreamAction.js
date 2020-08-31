import {DELETE_DREAM} from './tyeps';

export default function editNewDream(id) {
    return {
      type: DELETE_DREAM,
      id,
    };
  }