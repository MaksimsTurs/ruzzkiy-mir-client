import { AuthContext } from "@/custom-hook/use-auth/authProvider";
import { useContext } from "react";

import type { UserRoles } from "@/global.type";
import type { UserSessionData } from "../use-auth/useAuth.type";

export default function usePermitor() {
  const user: UserSessionData | undefined = useContext(AuthContext)?.userState.user

  let permitorArray: number[] = []

  return {
    role: function(toHave: UserRoles[]) {
      if(!toHave.includes(user?.role || 'User')) permitorArray.push(1)

      return this
    },
    equal: function(key: keyof UserSessionData, equal?: string) {
      if(user?.[key] !== equal) permitorArray.push(1)

      return this
    },
    roleAndEqual: function(toHave: UserRoles[], key: keyof UserSessionData, equal?: string) {
      if(!(user?.[key] === equal && toHave.includes(user?.role || 'User'))) permitorArray.push(1)

      return this  
    },
    roleOrEqual: function(toHave: UserRoles[], key: keyof UserSessionData, equal?: string) {
      if(!(user?.[key] === equal || toHave.includes(user?.role || 'User'))) permitorArray.push(1)

      return this  
    },
    permited: function() {
      const permited: boolean = permitorArray.length <= 0
      
      permitorArray = []

      return permited
    }
  }
}