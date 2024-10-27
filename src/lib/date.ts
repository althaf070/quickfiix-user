import { format } from "date-fns"

// Reusable function to format dates in TypeScript
export const formatDatetime = (dateString?: string | Date): string => {
  return dateString ? format(new Date(dateString), "MMMM do, yyyy h:mm a") : "N/A";
}

export const formatDate= (dateString?: string | Date): string => {
  return dateString ? format(new Date(dateString), "MMMM do, yyyy") : "N/A";
}
