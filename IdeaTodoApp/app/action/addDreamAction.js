import {ADD_NEW_DREAM} from './tyeps';

export default function addNewDream(name,description,status) {
    return {
      type: ADD_NEW_DREAM,
      name,
      description,
      status
    };
  }

