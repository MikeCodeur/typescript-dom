import { Loader2 } from "lucide-react"

const loading = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background/75">
      <p className="flex flex-col items-center gap-2">
        <span>Chargement</span>
        <Loader2 className="h-12 w-12 animate-spin" />
      </p>
    </div>
  )
}

export default loading
