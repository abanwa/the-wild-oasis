import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        status: "check-in",
        isPaid: true,
        ...breakfast
      }),

    // data will be the record or data that will be returned from the updateBooking function
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked in`);

      // we can parse in the wuery key to invalidate or just parse in {active: true}. this will invalidate all the query ekys in our app. then we will navigate back to the dashboard
      //   queryClient.invalidateQueries("booking");
      queryClient.invalidateQueries({ active: true });
      navigate("/");
    },

    onError: () => toast.error("There was an error while checking in")
  });

  return { checkin, isCheckingIn };
}
