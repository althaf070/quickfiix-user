import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate } from "@/lib/date";
import { useBookingStore } from "@/store/bookingsStore";
import { Trash } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const statusColors = {
  pending: "bg-[#FEF3C7] text-[#92400E]",       // Yellow
  confirmed: "bg-[#DBEAFE] text-[#1D4ED8]",     // Blue
  completed: "bg-[#D1FAE5] text-[#065F46]",     // Green
  canceled: "bg-[#FECACA] text-[#991B1B]",      // Red
  paid: "bg-[#88D66C] text-[#6D28D9]",          // Purple
};

const Appointments = () => {
  const { getuserAppointment, bookings, deleteAppointment } = useBookingStore();

  const handleDelete = async (aid: string) => {
    try {
      await deleteAppointment(aid);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getuserAppointment();
  }, [getuserAppointment]);

  if (bookings.length === 0) {
    return (
      <div className="flex min-h-screen justify-center items-center">
        <h1 className="text-4xl lg:text-6xl font-semibold">
          No Appointments booked till now
        </h1>
      </div>
    );
  }
// sort table
  const sortedBookings = Array.isArray(bookings)
  ? bookings.slice().sort((a, b) => {
      if (a.status === "paid") return 1;
      if (b.status === "paid") return -1;
      return 0;
    })
  : [];


  return (
    <div className="mx-7 p-2 mt-5">
      <Table className="border">
        <TableCaption>A list of your recent Appointments.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Service</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Scheduled Date</TableHead>
            <TableHead>Booked Date</TableHead>
            <TableHead>Method</TableHead>
            <TableHead>Amount/hr</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedBookings?.map((booking) => (
            <TableRow key={booking?._id}>
              <TableCell className="font-medium capitalize underline">
               <Link to={`/servicedetails/${booking.service?._id}`}>{booking?.service?.servicename}</Link>
              </TableCell>
              <TableCell>
                <Badge
                  className={`px-2 py-1 rounded ${statusColors[booking?.status]}`}
                  variant={"outline"}
                >
                  {booking?.status}
                </Badge>
              </TableCell>
              <TableCell>{formatDate(booking?.appointmentDate)}</TableCell>
              <TableCell>{formatDate(booking?.bookingDate)}</TableCell>
              <TableCell>{booking?.payment}</TableCell>
              <TableCell>₹{booking.service?.price}</TableCell>
              <TableCell className="text-right">
                {booking.status == 'completed' && booking.payment == "online"&& <Button>Pay Now</Button>}
                {booking.status == "pending" && (
                  <Button
                    variant={"destructive"}
                    onClick={() => handleDelete(booking?._id)}
                  >
                   <Trash/> Cancel
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total services booked currently</TableCell>
            <TableCell className="text-right">{bookings.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default Appointments;
