import axios from "axios";
import { USERS_API } from "../Kanbas/Courses/People/client";

export const deleteUser = async (userId: string) => {
    const response = await axios.delete( `${USERS_API}/${userId}` );
    return response.data;
  };
  