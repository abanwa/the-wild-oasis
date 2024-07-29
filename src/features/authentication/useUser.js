import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useUser() {
  // react query will get the logged in user from the query cache after the user has already logged in because when the user logged in, the user details were stored in the query cahce using the query key "user"
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser
  });

  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
}
