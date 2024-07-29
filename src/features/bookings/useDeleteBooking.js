import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();
  // when we invalidate the cache name we used when we fetched the data in CabinTable.jsx, it will automatically make the data to be refetched again
  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: deleteBookingApi,
    onSuccess: () => {
      toast.success("Booking successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["bookings"]
      });
    },
    onError: (err) => toast.error(err.message)
  });

  return { isDeleting, deleteBooking };
}
