import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "check-out"
      }),

    // data will be the record or data that will be returned from the updateBooking function
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked out`);

      // we can parse in the wuery key to invalidate or just parse in {active: true}. this will invalidate all the query ekys in our app. then we will navigate back to the dashboard
      //   queryClient.invalidateQueries("booking");
      queryClient.invalidateQueries({ active: true });
    },

    onError: () => toast.error("There was an error while checking out")
  });

  return { checkout, isCheckingOut };
}
