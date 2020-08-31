import {EDIT_DREAM} from './tyeps';

export default function editNewDream(id,name,description,status) {
    return {
      type: EDIT_DREAM,
      id,
      name,
      description,
      status
    };
  }