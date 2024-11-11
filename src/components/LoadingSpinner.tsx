import { cn } from "@/lib/utils"

interface LoadingSpinnerProps {
  className?: string
}

export default function LoadingSpinner({ className }: LoadingSpinnerProps = {}) {
  return (
    <div className={cn("flex items-center justify-center w-full h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800", className)}>
      <div className="relative w-24 h-24 animate-spin">
        {[0, 1, 2, 3].map((index) => (
          <span
            key={index}
            className={cn(
              "absolute w-full h-full border-4 rounded-full",
              index % 2 === 0 ? 'border-primary' : 'border-secondary',
              `animate-pulse-${index + 1}`
            )}
            style={{
              borderRightColor: 'transparent',
              borderBottomColor: 'transparent',
              transform: `rotate(${index * 45}deg)`,
              animationDelay: `${index * 0.15}s`
            }}
          />
        ))}
      </div>
    </div>
  )
}